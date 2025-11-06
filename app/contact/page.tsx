"use client";
import { useState } from "react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Contact() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter()
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, name, email, title}),
      })
      const data = await res.json()
      if(data.success) {
        router.push('/')
      }
    } catch (error) {}
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center">Feedback us</h2>
        <input
          type="text"
          placeholder="Title"
          required
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your name..."
          required
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Title feedback */}
        {/* Email field */}
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full border p-2 rounded"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* User feedback field*/}
        <textarea
          placeholder="Send us your feedback"
          required
          className="w-full border p-2 rounded h-28"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="text-center">
          <button
            className="w-full hover:space-x-2 cursor-pointer bg-blue-500 text-white rounded-lg px-2 py-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
