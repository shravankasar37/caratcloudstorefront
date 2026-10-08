import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { scrollToId } from "@/lib/site";

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -84 } });
    window.__lenis = lenis;
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);
  return null;
};

export const RouteScroll = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToId(hash.slice(1)), 120);
      return () => clearTimeout(t);
    }
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
};
