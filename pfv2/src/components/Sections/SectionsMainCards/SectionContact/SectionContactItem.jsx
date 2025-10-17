import { useState } from "react"

function ContactItem({ icon: Icon, label, content, isLink = false, href }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-3 text-[#daa520] hover:text-white transition-colors duration-200"
      aria-expanded={open}
    >
      <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      {open && (
        isLink ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-300 hover:text-[#daa520] transition-colors duration-200"
          >
            {content}
          </a>
        ) : (
          <span className="text-gray-300">{content}</span>
        )
      )}
    </button>
  );
}

export default ContactItem