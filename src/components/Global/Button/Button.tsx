import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  download?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  download,
  onClick,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;
  const combinedClasses = `${styles.btn} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
