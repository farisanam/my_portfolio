import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Menggabungkan logika handleScroll dari kedua kode
  useEffect(() => {
    const handleScroll = () => {
      // Deteksi background navbar (scrolled)
      setScrolled(window.scrollY > 20);

      // Deteksi section aktif (logic offsetTop dari kode kedua)
      const scrollPos = window.scrollY + 120;
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan sekali saat mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup menu mobile otomatis saat resize ke desktop
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur transition border-b
          ${scrolled
            ? "bg-white/80 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <span className="font-bold tracking-tight text-lg text-slate-900 dark:text-white">
            Farisan
          </span>

          {/* Desktop Menu - Menggunakan animasi Underline Framer Motion */}
          <ul className="hidden md:flex gap-8 text-sm font-medium relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`px-1 py-1 transition-colors hover:text-blue-500
                    ${active === item.id
                      ? "text-blue-600 dark:text-white font-semibold"
                      : "text-slate-500"
                    }`}
                >
                  {item.label}
                </a>

                {active === item.id && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Right Action - Sekarang hanya berisi tombol Hamburger (Mobile) */}
          <div className="flex items-center gap-3">
            {/* ThemeToggle telah dipindah ke bagian paling bawah agar melayang */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-900 dark:text-white"
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* POSISI BARU THEME TOGGLE: Letakkan di sini (di luar nav) */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>


      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar - Gabungan UI elegan & link active dari kode kedua */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-slate-950
          transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="pt-20 px-6">
          <ul className="flex flex-col gap-6 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block pl-3 transition-colors hover:text-blue-500
                    ${active === item.id
                      ? "text-blue-600 dark:text-white font-semibold"
                      : "text-slate-500"
                    }`}
                >
                  {item.label}
                </a>
                {active === item.id && (
                  <motion.span
                    layoutId="mobile-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] bg-blue-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
