import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Let’s connect
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/80">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Neo Anderson"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/80">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md bg-black/40 border border-white/10 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                placeholder="neo@matrix.io"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-4 py-2 font-medium hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" />
            {sent ? 'Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
