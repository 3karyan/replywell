type P = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M4.5 12.5l5 5L19.5 7" /></svg>
);
export const Plus = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 5v14M5 12h14" /></svg>
);
export const Play = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5.5v13a1 1 0 001.5.86l10.5-6.5a1 1 0 000-1.72L9.5 4.64A1 1 0 008 5.5z" /></svg>
);
export const Close = ({ className }: P) => (
  <svg {...base} strokeWidth={2} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Menu = ({ className }: P) => (
  <svg {...base} strokeWidth={1.8} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const PhoneOut = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    <path d="M15 3h6v6M21 3l-7 7" />
  </svg>
);
export const PhoneIn = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
    <path d="M20 4l-6 6M14 5v5h5" />
  </svg>
);
export const Filter = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 5h16l-6 7.5V19l-4 1.5v-8z" /></svg>
);
export const Calendar = ({ className }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /><path d="M9 14.5l2 2 4-4" />
  </svg>
);
export const Wave = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 10v4M8 6v12M12 9v6M16 4v16M20 10v4" /></svg>
);
export const Brain = ({ className }: P) => (
  <svg {...base} className={className}>
    <path d="M9 4a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 002 5 3 3 0 003 3 3 3 0 003-3V7a3 3 0 00-3-3z" />
    <path d="M15 4a3 3 0 013 3 3 3 0 012 5 3 3 0 01-2 5 3 3 0 01-3 3 3 3 0 01-3-3" />
  </svg>
);
export const Transfer = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 8h13l-3-3M20 16H7l3 3" /></svg>
);
export const Clock = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const Shield = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.8 12l2.2 2.2 4.3-4.4" /></svg>
);
export const Home = ({ className }: P) => (
  <svg {...base} className={className}><path d="M3.5 11L12 4l8.5 7M6 9.5V20h12V9.5" /><path d="M10 20v-5h4v5" /></svg>
);
export const Plug = ({ className }: P) => (
  <svg {...base} className={className}><path d="M9 3v5M15 3v5M6.5 8h11v3a5.5 5.5 0 01-11 0zM12 16.5V21" /></svg>
);
export const Spark = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></svg>
);
export const Trend = ({ className }: P) => (
  <svg {...base} className={className}><path d="M3.5 16.5l6-6 4 4 7-7M15 7.5h5.5V13" /></svg>
);
export const Flag = ({ className }: P) => (
  <svg {...base} className={className}><path d="M5 21V4M5 4h11l-2 4 2 4H5" /></svg>
);
export const Message = ({ className }: P) => (
  <svg {...base} className={className}><path d="M4 5.5h16v10H9l-5 4z" /></svg>
);
