import { IServiceItem } from "@/app/types";
import Section from "../../common/Section/Section";
import { BsBraces } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import ServiceItem from "./ServiceItem";

function Services() {
  const serviceItems: IServiceItem[] = [
    {
      icon: <BsBraces />,
      title: "Desarrollo Web",
      description:
        "Diseñamos y optimizamos sitios web atractivos, funcionales y orientados a alcanzar los objetivos de tu negocio.",
      linkHref: "/desarrollo-web",
    },
    {
      icon: <BsCart />,
      title: "E-Commerce",
      description:
        "Creamos tiendas online personalizadas y escalables para que puedas vender de manera efectiva y sin límites.",
      linkHref: "/e-commerce",
    },
    {
      icon: <GoMegaphone />,
      title: "Publicidad Digital",
      description:
        "Gestionamos campañas óptimas en Facebook e Instagram para ampliar tu audiencia y generar más conversiones.",
      linkHref: "/publicidad-digital",
    },
  ];
  return (
    <Section id="services" variant="services" title="¿Qué Necesitás?">
      {serviceItems.map((serviceItem, index) => (
        <ServiceItem key={index} serviceItem={serviceItem} />
      ))}
    </Section>
  );
}

export default Services;
