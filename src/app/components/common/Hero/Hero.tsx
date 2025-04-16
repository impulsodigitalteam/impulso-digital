import { ReactNode } from "react";
import Section from "../Section/Section";
import styles from "./Hero.module.css";
import Link from "next/link";

interface IProps {
  title: ReactNode;
  description: string;
  primaryLinkHref: string;
  primaryLinkText: string;
  image: ReactNode;
}

function Hero({
  title,
  description,
  primaryLinkText,
  primaryLinkHref,
  image,
}: IProps) {
  return (
    <Section variant="hero">
      <div className={styles.heroText}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.linksContainer}>
          <Link href={primaryLinkHref}>{primaryLinkText}</Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5493416153900&text=%C2%A1Hola!%20Quisiera%20hacer%20una%20consulta%20"
            target="_blank"
          >
            Hablar con Asesor
          </Link>
        </div>
      </div>
      <div className={styles.heroImgContainer}>{image}</div>
    </Section>
  );
}

export default Hero;
