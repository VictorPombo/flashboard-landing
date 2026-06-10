export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
      >
        <rect width="26" height="26" rx="6" fill="#6C63FF" />
        <path d="M14.5 4 7 14.5h5L11.5 22 19 11.5h-5L14.5 4Z" fill="#C8F135" />
      </svg>
      <span className="text-lg font-extrabold tracking-tight text-fg">
        Flash<span className="text-brand-soft">Board</span>
      </span>
    </span>
  );
}
