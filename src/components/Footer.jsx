import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="font-semibold">Farisan Amanuddin</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Frontend Developer
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {year} All rights reserved
          </p>
        </div>

        {/* RIGHT - SOCIAL */}
        <div className="flex gap-6">
          <a
            href="mailto:farisan@email.com"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/username"
            target="_blank"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
