import { Metadata } from "next";
import { IFaqItem } from "./types";
import Hero from "./components/common/Hero/Hero";
import Gif from "./components/home/Gif";
import Us from "./components/home/Us/Us";
import Services from "./components/home/Services/Services";
import Faq from "./components/common/Faq/Faq";
import Contact from "./components/common/Contact/Contact";

export const metadata: Metadata = {
  title: "Impulso Digital - Inicio",
};

function Home() {
  const faqItems: IFaqItem[] = [
    {
      question: "¿Ofrecen asesoramiento antes de contratar un servicio?",
      answer:
        "Sí, brindamos asesoramiento previo para ayudarte a elegir la mejor solución según tus necesidades y objetivos.",
    },
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer:
        "Puedes contactarnos a través de nuestro formulario de contacto o WhatsApp, y te enviaremos una propuesta personalizada.",
    },
    {
      question: "¿Cuáles son sus formas de pago disponibles?",
      answer:
        "Aceptamos pagos mediante transferencia bancaria, tarjeta de crédito/débito y otras plataformas digitales según disponibilidad.",
    },
    {
      question: "¿Trabajan con clientes de cualquier parte del mundo?",
      answer:
        "Sí, colaboramos con clientes internacionales y adaptamos nuestro proceso de trabajo para facilitar la comunicación y entrega del proyecto.",
    },
  ];

  return (
    <>
      <Hero
        title={
          <>
            Tu negocio al <span>siguiente nivel</span>
          </>
        }
        description="Potenciamos tu presencia online con estrategias innovadoras,
              desarrollo web a medida y publicidad de alto impacto."
        primaryLinkHref="#services"
        primaryLinkText="Ver Servicios"
        image={<Gif />}
      />
      <Us />
      <Services />
      <Faq faqItems={faqItems} />
      <Contact />
    </>
  );
}

export default Home;
