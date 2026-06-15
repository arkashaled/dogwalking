import { CALENDLY_URL } from "@/lib/config";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href = CALENDLY_URL,
  children,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
