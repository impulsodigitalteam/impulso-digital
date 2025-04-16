import Section from "../../common/Section/Section";
import styles from "./Us.module.css";
import Image from "next/image";

function Us() {
  return (
    <Section variant="us" title="Nosotros">
      <div className={styles.usImgContainer}>
        <Image src="/img/us.webp" alt="Us" fill sizes="100vw" />
      </div>
      <div className={styles.usDescription}>
        <p>
          En Impulso Digital, combinamos creatividad, estrategia y tecnología
          para ayudar a emprendedores y empresas a destacarse en el mundo de
          Internet.
        </p>
        <p>
          Nuestro equipo multidisciplinario cuenta con experiencia en desarrollo
          web, marketing y ventas, lo que nos permite ofrecer soluciones
          integrales y personalizadas.
        </p>
        <p>
          Trabajamos con compromiso y cercanía, asegurando que cada proyecto
          tenga una dirección clara, optimización constante y enfoque en el
          crecimiento.
        </p>
      </div>
    </Section>
  );
}

export default Us;
