import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const ContactSection = () => (
  <section id="contact" className="section-shell pb-32">
    <SectionTitle
      eyebrow="Connect"
      title="Contact"
      subtitle="Let&apos;s build something memorable. Send a message or reach out directly."
    />

    <motion.div
      className="glass-panel grid gap-6 rounded-2xl p-6 md:grid-cols-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <form className="space-y-4">
        <input className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white" placeholder="Name" />
        <input className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white" placeholder="Email" type="email" />
        <textarea className="h-32 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-white" placeholder="Project details" />
        <button className="rounded-full border border-neon-blue/70 px-5 py-2 text-neon-blue" type="button">Send Message</button>
      </form>

      <div className="space-y-4 text-slate-200">
        <p>Email: hello@alexnova.dev</p>
        <p>LinkedIn: linkedin.com/in/alexnova</p>
        <p>GitHub: github.com/alexnova</p>
        <div className="mt-6 rounded-xl border border-neon-violet/30 bg-slate-950/40 p-4 text-sm text-slate-300">
          Subtle 3D background achieved via animated gradients + parallax container transforms.
        </div>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
