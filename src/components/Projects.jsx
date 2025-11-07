import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'WebGL-powered portfolio with custom shader effects and smooth page transitions.',
    icon: Globe,
  },
  {
    title: 'Realtime Collaboration App',
    description: 'WebSockets-based note-taking app with multiplayer cursors and presence.',
    icon: Code2,
  },
  {
    title: 'Mobile Design System',
    description: 'Token-driven, platform-agnostic component library for iOS and Android.',
    icon: Smartphone,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#07070b] py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{description}</p>
              <button className="mt-5 text-sm text-fuchsia-300 hover:text-fuchsia-200">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
