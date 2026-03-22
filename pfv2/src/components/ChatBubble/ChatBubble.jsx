import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useChat } from "../../hooks/useChat"
import ChatMessage from "./ChatMessage"
import ChatInput from "./ChatInput"

const panelVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 28 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

const messageVariants = {
  hidden: (isUser) => ({
    opacity: 0,
    x: isUser ? 20 : -20,
    y: 8,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
}

function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, isLoading, send, reset } = useChat()
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isLoading])

  const toggle = () => setIsOpen((prev) => !prev)

  const handleClose = () => {
    setIsOpen(false)
    reset()
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed bottom-24 right-5 z-50
              w-[360px] max-w-[calc(100vw-2.5rem)] h-[500px] max-h-[calc(100vh-8rem)]
              flex flex-col
              glass-panel rounded-2xl
              shadow-2xl shadow-black/40
              origin-bottom-right
            "
          >
            <div className="glass-header flex items-center justify-between px-4 py-3 rounded-t-2xl border-b border-white/10">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={{
                    boxShadow: [
                      "0 0 4px rgba(52,211,153,0.4)",
                      "0 0 10px rgba(52,211,153,0.7)",
                      "0 0 4px rgba(52,211,153,0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm font-medium text-white/90">Assistant d&apos;Andy</span>
              </div>
              <button
                onClick={handleClose}
                className="text-white/50 hover:text-white/90 transition-colors text-lg leading-none"
                aria-label="Fermer le chat"
              >
                ✕
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  custom={msg.role === "user"}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <ChatMessage role={msg.role} content={msg.content} />
                </motion.div>
              ))}
              {isLoading && messages[messages.length - 1]?.content === "" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-1.5 px-3 py-2"
                >
                  <span className="typing-dot" />
                  <span className="typing-dot animation-delay-150" />
                  <span className="typing-dot animation-delay-300" />
                </motion.div>
              )}
            </div>

            <ChatInput onSend={send} disabled={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggle}
        className="
          fixed bottom-5 right-5 z-50
          w-14 h-14 rounded-full
          glass-bubble
          flex items-center justify-center
          shadow-lg shadow-black/30
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        animate={
          !isOpen
            ? {
                boxShadow: [
                  "0 0 0 0 rgba(255,255,255,0)",
                  "0 0 0 8px rgba(255,255,255,0.08)",
                  "0 0 0 0 rgba(255,255,255,0)",
                ],
              }
            : {}
        }
        transition={
          !isOpen
            ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        <motion.span
          className="text-xl"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isOpen ? "✕" : "💬"}
        </motion.span>
      </motion.button>
    </>
  )
}

export default ChatBubble
