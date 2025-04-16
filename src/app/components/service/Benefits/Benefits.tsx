import { IBenefitItem } from "@/app/types";
import Section from "../../common/Section/Section";
import BenefitItem from "./BenefitItem/BenefitItem";

interface IProps {
  benefitItems: IBenefitItem[];
}

function Benefits({ benefitItems }: IProps) {
  return (
    <Section id="benefits" variant="benefits" title="Beneficios">
      {benefitItems.map((benefit, index) => (
        <BenefitItem key={index} benefit={benefit} />
      ))}
    </Section>
  );
}

export default Benefits;
