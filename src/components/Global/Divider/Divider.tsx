import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
  variant?: "primary" | "secondary" | "accent";
}

export default function Divider({ variant = "primary" }: DividerProps) {
  const variantClass = styles[`divider--${variant}`];

  return (
    <div className="container">
      <hr className={`${styles.divider} ${variantClass}`} />
    </div>
  );
}
