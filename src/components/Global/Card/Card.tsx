import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  variant?: "cyan" | "pink";
  className?: string;
}

const Card = ({ children, variant = "cyan", className = "" }: CardProps) => {
  const hashedVariant = styles[`card--${variant}`];

  const globalVariant = `card--${variant}`;

  return (
    <div
      className={`${styles.card} ${hashedVariant} ${globalVariant} ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardHeader} ${className}`}>{children}</div>;

const CardBody = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardBody} ${className}`}>{children}</div>;

const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardFooter} ${className}`}>{children}</div>;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
