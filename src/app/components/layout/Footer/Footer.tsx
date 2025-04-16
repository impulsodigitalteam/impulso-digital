import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; <span>{currentYear}</span> Impulso Digital. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
