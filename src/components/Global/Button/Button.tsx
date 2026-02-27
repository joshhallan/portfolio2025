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
  const variantClass = styles[`btn--${variant}`];
  const combinedClasses = `${styles.btn} ${variantClass} ${className}`.trim();

  const commonProps = {
    className: combinedClasses,
    onClick,
  };

  if (href) {
    return (
      <a href={href} download={download} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
}
