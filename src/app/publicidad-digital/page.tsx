import { Metadata } from "next";
import { IBenefitItem, IFaqItem, IPlanOfActionItem } from "../types";
import Hero from "../components/common/Hero/Hero";
import { GoMegaphone } from "react-icons/go";
import Benefits from "../components/service/Benefits/Benefits";
import { LuMessagesSquare } from "react-icons/lu";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import PlanOfAction from "../components/service/PlanOfAction/PlanOfAction";
import Faq from "../components/common/Faq/Faq";
import Contact from "../components/common/Contact/Contact";

export const metadata: Metadata = {
  title: "Impulso Digital - Servicio de Publicidad Digital",
};

function page() {
  const benefitItems: IBenefitItem[] = [
    {
      icon: <LuMessagesSquare />,
      title: "Más mensajes",
      description:
        "Orientamos la campaña a generar contactos reales de personas interesadas a través de WhatsApp, Facebook y/o Instagram.",
    },
    {
      icon: <BsPersonArmsUp />,
      title: "Más reconocimiento",
      description:
        "Posicionamos tu negocio en la mente del público, aumentando su visibilidad y fortaleciendo su presencia digital.",
    },
    {
      icon: <MdAttachMoney />,
      title: "Más ventas",
      description:
        "Llevamos tu producto a quienes lo necesitan, con campañas que generan interés, acción y resultados.",
    },
  ];

  const planOfActionItems: IPlanOfActionItem[] = [
    {
      title: "Investigación y Segmentación",
      description:
        "Definimos tu público objetivo y analizamos la competencia para estructurar la campaña.",
    },
    {
      title: "Creación de Anuncios",
      description:
        "Diseñamos anuncios atractivos con textos y gráficos que generen impacto.",
    },
    {
      title: "Optimización y Ajustes",
      description:
        "Monitoreamos el rendimiento y ajustamos la segmentación para mejorar resultados.",
    },
    {
      title: "Escalado y Conversión",
      description:
        "Refinamos la estrategia para aumentar el retorno de inversión y atraer más clientes.",
    },
  ];

  const faqItems: IFaqItem[] = [
    {
      question: "¿Cuánto cuesta una campaña de publicidad?",
      answer:
        "El valor se define en función del alcance y los objetivos de la campaña. Podemos asesorarte según tus metas.",
    },
    {
      question:
        "¿Cuáles son las ventajas de hacer campañas de publicidad con Impulso Digital?",
      answer:
        "Con nuestra experiencia, estrategia, diseño profesional y análisis constante, nos enfocamos en hacer crecer tu negocio con el objetivo de aumentar tus ventas.",
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer:
        "Generalmente, en las primeras semanas se obtienen datos clave, pero los mejores resultados llegan con optimización continua.",
    },
    {
      question: "¿Qué métricas utilizan para medir el éxito de las campañas?",
      answer:
        "Analizamos CTR, conversiones, ROAS, costo por clic y otros factores relevantes de los que no necesitas preocuparte, ya que nosotros nos encargamos de todo el trabajo de optimización.",
    },
  ];

  return (
    <>
      <Hero
        title={
          <>
            Publicidad Digital <span>medible y eficiente</span>
          </>
        }
        description="Gestionamos campañas óptimas en Facebook e Instagram para ampliar tu audiencia y generar más conversiones."
        primaryLinkHref="#benefits"
        primaryLinkText="Ver Beneficios"
        image={
          <GoMegaphone
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
