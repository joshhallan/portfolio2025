import React from "react";
import { Typography } from "fj-elements";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: string;
  align?: "left" | "center" | "right";
  color?: string;
  underline?: boolean;
}

export default function SectionTitle({
  children,
  align = "center",
  color = "white", // Set a clear baseline default fallback color
  underline = false,
}: SectionTitleProps) {
  return (
    <Typography
      as="h2"
      style={{
        color: color,
        textAlign: align,
        marginBottom: "40px",
      }}
      className={underline ? styles.underline : ""}
    >
      {children}
    </Typography>
  );
}
