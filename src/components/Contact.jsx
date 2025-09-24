import React, { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Anonymous"}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    return `mailto:manjurloriya58@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-transparent text-white">
      <h2 className="text-3xl text-center font-bold mb-10">Contact</h2>
      <form className="max-w-2xl mx-auto grid gap-4">
        <label className="grid gap-2 group">
          <span className="text-gray-300 group-focus-within:text-white transition-colors">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 rounded bg-black/60 border border-gray-800 outline-none ring-0 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 group">
          <span className="text-gray-300 group-focus-within:text-white transition-colors">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded bg-black/60 border border-gray-800 outline-none ring-0 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 group">
          <span className="text-gray-300 group-focus-within:text-white transition-colors">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-3 py-2 rounded bg-black/60 border border-gray-800 min-h-[120px] outline-none ring-0 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 transition"
            placeholder="How can I help?"
          />
        </label>
        <div className="flex gap-3">
          <a
            href={mailtoHref()}
            className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded transition-transform active:scale-95"
          >
            Send
          </a>
          <button
            type="reset"
            onClick={() => { setName(""); setEmail(""); setMessage("") }}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-transform active:scale-95"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  )
}


