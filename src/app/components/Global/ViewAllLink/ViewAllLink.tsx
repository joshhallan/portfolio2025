import { Cell } from "fj-elements";
import Link from "next/link";
import styles from "./ViewAllLink.module.css";

export default function ViewAllLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Cell small={12}>
      <div className={styles.actionWrapper}>
        <Link
          href={href}
          className={styles.viewAllLink}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </Cell>
  );
}
