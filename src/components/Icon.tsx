import * as React from "react";

export type IconName =
  | "shield" | "globe" | "lock" | "doc" | "pulse" | "card" | "server"
  | "building" | "columns" | "chart" | "bank" | "coin" | "id" | "car"
  | "check" | "arrow" | "mail" | "phone" | "chevron" | "users"
  | "clipboard" | "search" | "graduation" | "book" | "linkedin" | "medium";

const P: Record<IconName, React.ReactNode> = {
  shield: <><path d="M12 3 4 6v6c0 5 3.4 7.6 8 9 4.6-1.4 8-4 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  lock: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V8a5 5 0 0 1 10 0v3" /></>,
  doc: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  pulse: <><path d="M3 12h4l3 8 4-16 3 8h4" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
  building: <><path d="M3 10 12 4l9 6M5 10v9h14v-9M3 21h18" /></>,
  columns: <><path d="M12 3v18M6 8l6-4 6 4M5 21h14" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  bank: <><path d="M3 10 12 4l9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" /></>,
  coin: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3H9.5h5a1.5 1.5 0 0 1 0 3h-5" /></>,
  id: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M5 17c.6-2 2.2-3 4-3s3.4 1 4 3M15 9h4M15 13h4" /></>,
  car: <><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4H5zM7 17v2M17 17v2" /><circle cx="7.5" cy="15" r=".6" /><circle cx="16.5" cy="15" r=".6" /></>,
  check: <><path d="M20 6 9 17l-5-5" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20c0-3 2.5-4.6 5.5-4.6s5.5 1.6 5.5 4.6" /><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17 15.6c2.4.4 4 1.9 4 4.4" /></>,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zM9 11l2 2 4-4" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  graduation: <><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></>,
  book: <><path d="M4 19V6a2 2 0 0 1 2-2h6v15H6a2 2 0 0 0-2 2zM20 19V6a2 2 0 0 0-2-2h-6v15h6a2 2 0 0 1 2 2z" /></>,
  linkedin: <><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.5H5.67v7.84h2.67zM7 9.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zM18.34 18.34v-4.3c0-2.3-1.23-3.37-2.86-3.37-1.32 0-1.9.72-2.23 1.23v-1.06h-2.67v7.84h2.67v-4.38c0-.23.02-.46.09-.63.18-.46.6-.94 1.32-.94.93 0 1.3.71 1.3 1.75v4.2h2.67z" /></>,
  medium: <><path d="M4.4 7.5a.9.9 0 0 0-.3-.76L2.3 4.6V4.3h5.5l4.2 9.3 3.7-9.3H21v.3l-1.5 1.45a.45.45 0 0 0-.17.43v10.8a.45.45 0 0 0 .17.43L21 19.5v.3h-7.4v-.3l1.55-1.5c.15-.15.15-.2.15-.43V9.1l-4.3 10.7h-.6L5.4 9.1v7.16c-.04.31.06.62.28.84l2 2.44v.3H2.3v-.3l2-2.44c.22-.22.32-.53.27-.84V7.5z" /></>,
};

const FILLED: Partial<Record<IconName, boolean>> = { linkedin: true, medium: true };

export function Icon({ name, className, size = 24 }: { name: IconName; className?: string; size?: number }) {
  const filled = FILLED[name];
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  );
}
