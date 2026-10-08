import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { DemoButton } from "./Buttons";
import { NAV, scrollToId } from "@/lib/site";

export const useGo = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (hash) => {
    if (pathname === "/") scrollToId(hash);
    else navigate(hash === "top" ? "/" : `/#${hash}`);
  };
};

export const Navbar = () => {
  const go = useGo();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const click = (hash) => {
    setOpen(false);
    go(hash);
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 border-b ${
        scrolled || open ? "bg-paper/85 backdrop-blur-xl border-line shadow-[0_8px_30px_-18px_rgba(11,21,40,0.35)]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)} data-testid="nav-logo-link"><Logo /></Link>
        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.hash}
              onClick={() => click(n.hash)}
              data-testid={`nav-link-${n.hash}`}
              className="nav-link"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <DemoButton testid="nav-book-demo-button" className="hidden sm:inline-flex !py-2.5 !px-5 !text-sm" />
          <button
            className="xl:hidden grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden border-t border-line bg-paper"
            data-testid="nav-mobile-menu"
          >
            <div className="px-5 py-4 grid gap-1">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.hash}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => click(n.hash)}
                  data-testid={`nav-mobile-link-${n.hash}`}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-left font-display text-xl font-bold text-navy hover:bg-cream"
                >
                  {n.label}
                  <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                </motion.button>
              ))}
              <Link to="/jewellery-erp" onClick={() => setOpen(false)} data-testid="nav-mobile-erp" className="rounded-xl px-3 py-2 text-sm font-semibold text-gold-deep">Jewellery ERP page →</Link>
              <Link to="/estate" onClick={() => setOpen(false)} data-testid="nav-mobile-estate" className="rounded-xl px-3 py-2 text-sm font-semibold text-gold-deep">Estate platform page →</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
