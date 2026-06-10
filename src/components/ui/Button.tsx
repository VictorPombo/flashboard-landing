import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
};

// Estilo único de CTA da página inteira (decisão de design):
// pill lima sobre dark, uppercase, hover via opacidade.
export function Button({ href, children, size = "md", className = "" }: ButtonProps) {
  const padding = size === "lg" ? "px-10 py-3.5" : "px-6 py-3";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full bg-accent text-ink text-sm font-bold uppercase tracking-wide ${padding} transition-all duration-200 hover:opacity-75 ${className}`}
    >
      {children}
    </Link>
  );
}
