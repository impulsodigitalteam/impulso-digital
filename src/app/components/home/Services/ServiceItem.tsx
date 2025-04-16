import { IServiceItem } from "@/app/types";
import Item from "../../common/Item/Item";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

interface IProps {
  serviceItem: IServiceItem;
}

function ServiceItem({ serviceItem }: IProps) {
  return (
    <Item variant="service">
      {serviceItem.icon}
      <h3>{serviceItem.title}</h3>
      <p>{serviceItem.description}</p>
      <Link href={serviceItem.linkHref}>
        <FaPlus />
      </Link>
    </Item>
  );
}

export default ServiceItem;
