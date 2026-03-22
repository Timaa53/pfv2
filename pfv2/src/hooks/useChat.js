import { useState, useCallback, useRef } from "react"

const API_URL = import.meta.env.DEV ? "http://localhost:3000/api/chat" : "/api/chat"

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Salut ! 👋 Je suis l'assistant d'Andy. Pose-moi tes questions sur son parcours, ses compétences ou ses projets !",
}

export function useChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)
  const abortRef = useRef(null)

  const send = useCallback(
    async (text) => {
      const trimmed = text.trim()
      if (!trimmed || isLoading) return

      const userMessage = { role: "user", content: trimmed }
      const assistantMessage = { role: "assistant", content: "" }

      setMessages((prev) => [...prev, userMessage, assistantMessage])
      setIsLoading(true)

      const history = [
        ...messages.filter((m) => m !== WELCOME_MESSAGE),
        userMessage,
      ]

      abortRef.current = new AbortController()

      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: abortRef.current.signal,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || "Erreur serveur")
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split("\n")
          buffer = lines.pop()

          for (const line of lines) {
            const trimmedLine = line.trim()
            if (!trimmedLine || !trimmedLine.startsWith("data: ")) continue

            const payload = trimmedLine.slice(6)
            if (payload === "[DONE]") break

            try {
              const { token } = JSON.parse(payload)
              if (token) {
                setMessages((prev) => {
                  const updated = [...prev]
                  const last = updated[updated.length - 1]
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + token,
                  }
                  return updated
                })
              }
            } catch {}
          }
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setMessages((prev) => {
            const updated = [...prev]
            updated[updated.length - 1] = {
              role: "assistant",
              content: "Désolé, une erreur est survenue. Réessaie dans un instant.",
            }
            return updated
          })
        }
      } finally {
        setIsLoading(false)
        abortRef.current = null
      }
    },
    [messages, isLoading]
  )

  const reset = useCallback(() => {
    abortRef.current?.abort()
    setMessages([WELCOME_MESSAGE])
    setIsLoading(false)
  }, [])

  return { messages, isLoading, send, reset }
}
