import { useState } from "react"

function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || disabled) return
    onSend(value)
    setValue("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-white/10">
      <div className="flex gap-2 items-end">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Pose ta question..."
          className="
            flex-1 bg-white/10 text-white text-sm
            rounded-xl px-3.5 py-2.5
            placeholder:text-white/30
            border border-white/10
            focus:outline-none focus:border-white/25
            transition-colors
            disabled:opacity-50
          "
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="
            w-9 h-9 rounded-xl
            bg-white/15 hover:bg-white/25
            text-white/80
            flex items-center justify-center
            transition-all
            disabled:opacity-30 disabled:hover:bg-white/15
          "
          aria-label="Envoyer"
        >
          ↑
        </button>
      </div>
    </form>
  )
}

export default ChatInput
