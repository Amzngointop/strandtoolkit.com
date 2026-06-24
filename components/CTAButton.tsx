import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
}

export default function CTAButton({ href, children, variant = "primary", external = false, className = "" }: CTAButtonProps) {
  const base = "inline-block font-sans uppercase tracking-[0.08em] transition-colors duration-150";

  const styles = {
    primary: "bg-ink text-bg text-xs font-medium px-6 py-3 hover:bg-inkHover",
    secondary: "border border-ink text-ink text-[11px] font-medium px-5 py-2.5 tracking-[0.1em] hover:bg-ink hover:text-bg",
    text: "text-ink text-[11px] font-medium tracking-[0.1em] hover:underline",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer sponsored" } : {};

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
