import { IPlanOfActionItem } from "@/app/types";
import Section from "../../common/Section/Section";
import PlanOfActionItem from "./PlanOfActionItem";

interface IProps {
  planOfActionItems: IPlanOfActionItem[];
}

function PlanOfAction({ planOfActionItems }: IProps) {
  return (
    <Section variant="planOfAction" title="Plan de Acción">
      {planOfActionItems.map((planOfActionItem, index) => (
        <PlanOfActionItem
          key={index}
          index={index}
          planOfActionItem={planOfActionItem}
        />
      ))}
    </Section>
  );
}

export default PlanOfAction;
