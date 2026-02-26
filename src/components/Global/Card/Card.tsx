import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  variant?: "cyan" | "pink";
  className?: string;
}

const Card = ({ children, variant = "cyan", className = "" }: CardProps) => {
  const variantClass = variant === "pink" ? styles.pink : styles.cyan;
  return (
    <div className={`${styles.card} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

// Header Sub-component
const CardHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardHeader} ${className}`}>{children}</div>;

// Body Sub-component
const CardBody = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardBody} ${className}`}>{children}</div>;

// Footer Sub-component
const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardFooter} ${className}`}>{children}</div>;

// Attach sub-components to the main Card object
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
