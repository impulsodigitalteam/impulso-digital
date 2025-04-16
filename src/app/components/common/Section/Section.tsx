import { ReactNode } from "react";
import styles from "./Section.module.css";

interface IProps {
  id?: string;
  variant: string;
  title?: string;
  children: ReactNode;
}

function Section({ id, variant, title, children }: IProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]}`}>
      <div className={styles.sectionContent} data-aos="fade-up">
        {variant !== "hero" ? <h2>{title}</h2> : null}
        <div className={styles.sectionBody}>{children}</div>
      </div>
    </section>
  );
}

export default Section;
