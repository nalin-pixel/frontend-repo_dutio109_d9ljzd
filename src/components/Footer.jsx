export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0b0b10] text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-3 text-sm">
        <p className="text-center">
          © {year} Your Name. Crafted with passion for motion, code, and cyber aesthetics.
        </p>
        <p className="text-center text-white/50">Built with React, Tailwind, Framer Motion, and Spline.</p>
      </div>
    </footer>
  );
}
