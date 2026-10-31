import { asset } from "@/lib/site";

// A phone frame around a real CaratCloud app screenshot (public/img/app/<name>.webp)
export const Phone = ({ shot, alt = "", className = "", tilt = 0 }) => (
  <div
    className={`relative rounded-[2.2rem] border border-navy/80 bg-navy p-[7px] shadow-[0_40px_80px_-30px_rgba(11,21,40,0.55)] ${className}`}
    style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}
  >
    <div className="absolute left-1/2 top-[11px] z-10 h-[14px] w-[30%] -translate-x-1/2 rounded-full bg-navy" />
    <div className="overflow-hidden rounded-[1.75rem] bg-white">
      <img src={asset(`img/app/${shot}.webp`)} alt={alt} loading="lazy" className="block aspect-[1200/2580] w-full object-cover object-top" />
    </div>
  </div>
);
