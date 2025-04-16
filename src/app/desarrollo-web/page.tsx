import { Metadata } from "next";
import { IBenefitItem, IFaqItem, IPlanOfActionItem } from "../types";
import Hero from "../components/common/Hero/Hero";
import { BsBraces } from "react-icons/bs";
import Benefits from "../components/service/Benefits/Benefits";
import { LuPalette } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import PlanOfAction from "../components/service/PlanOfAction/PlanOfAction";
import Faq from "../components/common/Faq/Faq";
import Contact from "../components/common/Contact/Contact";

export const metadata: Metadata = {
  title: "Impulso Digital - Servicio de Desarrollo Web",
};

function page() {
  const benefitItems: IBenefitItem[] = [
    {
      icon: <LuPalette />,
      title: "Diseño a medida",
      description:
        "Construimos experiencias digitales personalizadas, alineadas con las necesidades específicas de cada negocio.",
    },
    {
      icon: <BsPhone />,
      title: "Adaptabilidad móvil",
      description:
        "Garantizamos que tu sitio se visualice y funcione correctamente en cualquier pantalla, mejorando la accesibilidad y usabilidad.",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Carga optimizada",
      description:
        "Reducimos tiempos de espera con ajustes estratégicos de rendimiento, asegurando un sitio rápido y eficiente.",
    },
  ];

  const planOfActionItems: IPlanOfActionItem[] = [
    {
      title: "Análisis y Definición",
      description:
        "Evaluamos tus necesidades y objetivos para diseñar la estructura ideal de tu sitio.",
    },
    {
      title: "Diseño y Desarrollo",
      description:
        "Creamos una interfaz moderna y dinámica, pensada para potenciar la experiencia del usuario.",
    },
    {
      title: "Implementación y Pruebas",
      description:
        "Configuramos el sitio, optimizamos su rendimiento y verificamos su correcto funcionamiento.",
    },
    {
      title: "Lanzamiento y Mantenimiento",
      description:
        "Publicamos el sitio y ofrecemos soporte para actualizaciones y mejoras.",
    },
  ];

  const faqItems: IFaqItem[] = [
    {
      question: "¿Cuánto cuesta un sitio web?",
      answer:
        "El precio depende del tipo de sitio, la cantidad de secciones y las funcionalidades específicas. Evaluamos cada caso en particular.",
    },
    {
      question: "¿Qué tipo de sitios web pueden desarrollar?",
      answer:
        "Desarrollamos sitios corporativos, landing pages, portfolios y blogs.",
    },
    {
      question: "¿Cuál es el tiempo estimado para desarrollar un sitio web?",
      answer:
        "El tiempo puede variar según la complejidad del sitio, pero en general va de 2 a 4 semanas.",
    },
    {
      question: "¿Incluyen hosting y dominio en el desarrollo?",
      answer:
        "Sí, ofrecemos un servicio integral que contempla el dominio y el hosting desde el inicio.",
    },
  ];

  return (
    <>
      <Hero
        title={
          <>
            Desarrollo Web <span>moderno y efectivo</span>
          </>
        }
        description="Diseñamos y optimizamos sitios web atractivos, funcionales y
                orientados a alcanzar los objetivos de tu negocio."
        primaryLinkHref="#benefits"
        primaryLinkText="Ver Beneficios"
        image={
          <BsBraces
            style={{ width: "100%", height: "auto", color: "#f84e25" }}
          />
        }
      />
      <Benefits benefitItems={benefitItems} />
      <PlanOfAction planOfActionItems={planOfActionItems} />
      <Faq faqItems={faqItems} />
      <Contact />
    </>
  );
}

export default page;
