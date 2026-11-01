import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGES, SITE_URL } from "@/lib/seo";

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    const [, key, name] = selector.match(/\[(\w+(?::\w+)?)="([^"]+)"\]/);
    el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

// Keeps <title>, description and canonical in step with the route after in-app navigation.
// Unknown paths show the home page, so they are marked noindex to avoid duplicates.
export function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = PAGES[path];
    const meta = page || PAGES["/"];
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", SITE_URL + (page ? path : "/"));
    setMeta('meta[property="og:url"]', "content", SITE_URL + (page ? path : "/"));
    setMeta('meta[name="robots"]', "content", page ? "index, follow" : "noindex, follow");
  }, [pathname]);
  return null;
}
