import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { contactLinks } from '../utils/data';

const initialForm = { name: '', email: '', message: '' };

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell pb-32">
      <SectionTitle eyebrow="Connect" title="Contact" subtitle="Open to internships, software roles, and collaborative projects." />

      <motion.div
        className="glass-panel grid gap-8 rounded-2xl p-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <form className="space-y-4" noValidate onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
              placeholder="Name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
            {errors.name ? <p className="mt-1 text-xs text-rose-300">{errors.name}</p> : null}
          </div>
          <div>
            <input
              className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            />
            {errors.email ? <p className="mt-1 text-xs text-rose-300">{errors.email}</p> : null}
          </div>
          <div>
            <textarea
              className="h-32 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white"
              placeholder="Message"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            />
            {errors.message ? <p className="mt-1 text-xs text-rose-300">{errors.message}</p> : null}
          </div>
          <button className="rounded-full border border-neon-blue/70 px-5 py-2 text-neon-blue" type="submit">
            Send Message
          </button>
          {submitted ? <p className="text-sm text-emerald-300">Thanks! Your message is ready to be sent.</p> : null}
        </form>

        <div className="space-y-4 text-slate-200">
          <p className="text-lg text-white">rajom741@gmail.com</p>
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-neon-blue/70 hover:text-neon-blue">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
