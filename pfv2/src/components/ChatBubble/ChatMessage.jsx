import ReactMarkdown from "react-markdown"

function ChatMessage({ role, content }) {
  const isUser = role === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed
          ${isUser
            ? "bg-white/15 text-white rounded-br-md"
            : "glass-message text-white/90 rounded-bl-md"
          }
        `}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-0.5">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-0.5">{children}</ol>,
              li: ({ children }) => <li className="text-white/85">{children}</li>,
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noreferrer" className="text-blue-300 underline hover:text-blue-200">
                  {children}
                </a>
              ),
              h3: ({ children }) => <h3 className="font-semibold text-white mb-1 mt-2">{children}</h3>,
              h4: ({ children }) => <h4 className="font-medium text-white/95 mb-1 mt-1.5">{children}</h4>,
              code: ({ children }) => (
                <code className="bg-white/10 px-1 py-0.5 rounded text-xs">{children}</code>
              ),
              hr: () => <hr className="border-white/10 my-2" />,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
