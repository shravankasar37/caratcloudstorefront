import { ArrowUpRight } from "lucide-react";
import { wa } from "@/lib/site";

export const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.1-1.3A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .8.8-2.95-.2-.3a8.2 8.2 0 1 1 6.9 3.78Zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.76 4.76 0 0 0 1 2.53 10.9 10.9 0 0 0 4.17 3.68c1.55.67 2.16.73 2.94.61.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

export const DemoButton = ({ testid, label = "Book a Free Demo", msg, className = "" }) => (
  <a
    href={wa(msg)}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    className={`btn-gold group ${className}`}
  >
    <WhatsAppIcon className="h-[18px] w-[18px]" />
    <span>{label}</span>
    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </a>
);

export const GhostButton = ({ testid, children, onClick, href, className = "" }) => {
  const cls = `btn-ghost group ${className}`;
  if (href)
    return (
      <a href={href} data-testid={testid} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  return (
    <button type="button" onClick={onClick} data-testid={testid} className={cls}>
      {children}
    </button>
  );
};
