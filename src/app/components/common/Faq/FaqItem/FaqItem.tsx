"use client";

import { IFaqItem } from "@/app/types";
import { useState } from "react";
import Item from "../../Item/Item";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import styles from "./FaqItem.module.css";

interface IProps {
  faqItem: IFaqItem;
}

function FaqItem({ faqItem }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Item variant="faq" onClick={() => setIsOpen(!isOpen)}>
      <p>{faqItem.question}</p>
      {isOpen ? (
        <FaAngleUp fontSize="1.15rem" />
      ) : (
        <FaAngleDown fontSize="1.15rem" />
      )}
      {isOpen ? <p className={styles.answer}>{faqItem.answer}</p> : null}
    </Item>
  );
}

export default FaqItem;
