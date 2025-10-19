import { useRef, useState } from "react";

export default function SectionProjectsImagesLinks({ link, src, alt = "Image", rounded = "" }) {
  const enterRef = useRef(null);
  const leaveRef = useRef(null);
  const [overlay, setOverlay] = useState("overlay-initial");

  const getDirection = (e) => {
    const el = e.currentTarget;
    if (!el) return "left";
    const rect = el.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    const dist = {
      top: Math.abs(y - rect.top),
      right: Math.abs(x - rect.right),
      bottom: Math.abs(y - rect.bottom),
      left: Math.abs(x - rect.left),
    };
    return Object.entries(dist).reduce((a, b) => (a[1] < b[1] ? a : b))[0];
  };

  const handleEnter = (e) => {
    leaveRef.current = null;
    const dir = getDirection(e);
    enterRef.current = dir;
    setOverlay(`from-${dir} filter-visible`);
  };

  const handleLeave = (e) => {
    const dir = getDirection(e);
    leaveRef.current = dir;
    setOverlay(`leaving-from-${dir} filter-visible`);
    setTimeout(() => {
      if (leaveRef.current === dir) {
        leaveRef.current = null;
        enterRef.current = null;
        setOverlay("overlay-initial");
      }
    }, 500);
  };

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`relative h-full w-full aspect-square cursor-pointer overflow-hidden bg-cover bg-center ${rounded}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className={`absolute inset-0 bg-[#daa520] ${overlay}`} />

        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold">{alt}</h3>
        </div>
      </div>
    </a>
  );
}
