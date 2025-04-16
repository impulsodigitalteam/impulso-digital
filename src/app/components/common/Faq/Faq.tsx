import { IFaqItem } from "@/app/types";
import Section from "../Section/Section";
import FaqItem from "./FaqItem/FaqItem";

interface IProps {
  faqItems: IFaqItem[];
}

function Faq({ faqItems }: IProps) {
  return (
    <Section variant="faq" title="Preguntas Frecuentes">
      {faqItems.map((faqItem, index) => (
        <FaqItem key={index} faqItem={faqItem} />
      ))}
    </Section>
  );
}

export default Faq;
