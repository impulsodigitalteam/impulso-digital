import { IBenefitItem } from "@/app/types";
import Item from "../../../common/Item/Item";
import styles from "./BenefitItem.module.css";

interface IProps {
  benefit: IBenefitItem;
}

function BenefitItem({ benefit }: IProps) {
  return (
    <Item variant="benefit">
      <div className={styles.benefitIconContainer}>{benefit.icon}</div>
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </Item>
  );
}

export default BenefitItem;
