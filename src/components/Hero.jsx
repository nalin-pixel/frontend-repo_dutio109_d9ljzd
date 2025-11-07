import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
          Exploring the cyber frontier
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-xl text-white/80"
        >
          I craft immersive web experiences that blend design, motion, and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
