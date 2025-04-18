import { useEffect, useRef, useState } from "react";
import InfoRow from "./InfoRow";
import { Mail } from "lucide-react";

const ContactPopover = () => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePopover = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Connect Button */}
      <button
        ref={buttonRef}
        onClick={togglePopover}
        onMouseEnter={() => window.innerWidth > 768 && setOpen(true)}
        className="btn btn-outline border-secondary text-secondary hover:bg-secondary/10 px-4 py-2 flex items-center gap-2"
      >
        <Mail size={18} />
        Connect
      </button>

      {/* Popover Card */}
      <div
        className={`absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        onMouseEnter={() => window.innerWidth > 768 && setOpen(true)}
        onMouseLeave={() => window.innerWidth > 768 && setOpen(false)}
        ref={popoverRef}
      >
        <div className="relative bg-white/10 backdrop-blur-md text-white p-4 rounded-xl shadow-lg w-64">
          {/* Arrow */}
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/10" />

          {/* Content */}
          <div className="space-y-2">
            <InfoRow label="Email" value="aggarwalanagh21@gmail.com" />
            <InfoRow label="Phone" value="+91-7014881549" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopover;
