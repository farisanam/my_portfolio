import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection"; // Import ditambahkan

export default function Hero() {
  return (
    <AnimatedSection>
      {/* id="home" ditambahkan agar Navbar bisa mengarah ke sini */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-center"
        >
          {/* Name - Menggunakan teks dari kode asli pertama */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            Muhammad Farisan Amanuddin
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-slate-600 dark:text-slate-300">
            Web Developer & AI Enthusiast
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
            I build modern web applications and AI-powered systems with a focus on
            clean UI, performance, and real-world problem solving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-medium bg-slate-900 text-white hover:bg-slate-700 transition dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              View Projects
            </a>

            <a
            href="/cv/Farisan_Amanuddin_CV.pdf"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg
                        bg-slate-900 text-white dark:bg-white dark:text-slate-900
                        font-medium hover:opacity-90 transition"
            >
            Download CV
            </a>
          </div>
        </motion.div>
      </section>
    </AnimatedSection>
  );
}
