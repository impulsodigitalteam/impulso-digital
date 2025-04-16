import { IPlanOfActionItem } from "@/app/types";
import Item from "../../common/Item/Item";

interface IProps {
  index: number;
  planOfActionItem: IPlanOfActionItem;
}

function PlanOfActionItem({ index, planOfActionItem }: IProps) {
  return (
    <Item variant="planOfAction">
      <span>{index + 1}</span>
      <h3>{planOfActionItem.title}</h3>
      <p>{planOfActionItem.description}</p>
    </Item>
  );
}

export default PlanOfActionItem;
