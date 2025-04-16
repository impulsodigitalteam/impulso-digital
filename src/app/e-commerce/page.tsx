import { Metadata } from "next";
import { IBenefitItem, IFaqItem, IPlanOfActionItem } from "../types";
import Hero from "../components/common/Hero/Hero";
import { BsCart } from "react-icons/bs";
import Benefits from "../components/service/Benefits/Benefits";
import { RiToolsFill } from "react-icons/ri";
import { TfiLoop } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import PlanOfAction from "../components/service/PlanOfAction/PlanOfAction";
import Faq from "../components/common/Faq/Faq";
import Contact from "../components/common/Contact/Contact";

export const metadata: Metadata = {
  title: "Impulso Digital - Servicio de E-Commerce",
};

function page() {
  const benefitItems: IBenefitItem[] = [
    {
      icon: <RiToolsFill />,
      title: "Panel autoadministrable",
      description:
        "Incorporamos un sistema de control que te permite manejar tu tienda desde cualquier lugar.",
    },
    {
      icon: <TfiLoop />,
      title: "Flujo automatizado",
      description:
        "Implementamos procesos que conectan stock, pagos y envíos para una gestión ágil y eficiente.",
    },
    {
      icon: <HiMagnifyingGlass />,
      title: "Marketing integrado",
      description:
        "Incluimos estrategias para atraer más visitas, mejorar la conversión y potenciar tus ventas.",
    },
  ];

  const planOfActionItems: IPlanOfActionItem[] = [
    {
      title: "Estrategia y Configuración",
      description:
        "Definimos la arquitectura de la tienda según tus productos, servicios y objetivos.",
    },
    {
      title: "Diseño y Desarrollo",
      description:
        "Creamos una tienda atractiva, intuitiva y adaptada para facilitar la experiencia de compra.",
    },
    {
      title: "Integraciones y Pruebas",
      description:
        "Añadimos métodos de pago, envíos y validamos su correcto funcionamiento.",
    },
    {
      title: "Lanzamiento y Escalabilidad",
      description:
        "Ponemos la tienda en marcha y optimizamos estrategias para aumentar conversiones.",
    },
  ];

  const faqItems: IFaqItem[] = [
    {
      question: "¿Cuánto cuesta una tienda online?",
      answer:
        "El costo varía según la complejidad, la cantidad de productos y las herramientas requeridas. Te armamos una propuesta a medida.",
    },
    {
      question: "¿Cómo se gestionan los pagos en la tienda?",
      answer:
        "Trabajamos con Mercado Pago, una solución segura y confiable para recibir cobros con tarjeta, efectivo y transferencia.",
    },
    {
      question: "¿Puedo gestionar mi catálogo sin conocimientos técnicos?",
      answer:
        "Sí, preparamos la tienda para que su administración sea sencilla y sin complicaciones técnicas.",
    },
    {
      question: "¿Se pueden integrar reseñas o valoraciones de productos?",
      answer:
        "Sí, podemos incluir sistemas de reseñas y valoraciones para que tus clientes compartan su experiencia y aumente la confianza en tus productos.",
    },
  ];

  return (
    <>
      <Hero
        title={
          <>
            E-Commerce <span>rentable y seguro</span>
          </>
        }
        description="Creamos tiendas online personalizadas y escalables para que
                puedas vender de manera efectiva y sin límites."
        primaryLinkHref="#benefits"
        primaryLinkText="Ver Beneficios"
        image={
          <BsCart style={{ width: "100%", height: "auto", color: "#f84e25" }} />
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
