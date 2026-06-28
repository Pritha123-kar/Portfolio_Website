import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        "hover:scale-105",
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "border border-slate-600 bg-slate-800 text-white hover:bg-slate-700",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;