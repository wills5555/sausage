"use client";

import { useState } from "react";
import Button from "./Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage("Thank you for subscribing!");
      setEmail("");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="relative">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
      {message && <p className="text-emerald-400 text-sm">{message}</p>}
    </form>
  );
}