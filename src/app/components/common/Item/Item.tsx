import { MouseEventHandler, ReactNode } from "react";
import styles from "./Item.module.css";

interface IProps {
  variant: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children: ReactNode;
}

function Item({ variant, onClick, children }: IProps) {
  return (
    <div className={`${styles.item} ${styles[variant]}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Item;
