import { usePathname } from "next/navigation";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import styles from "./NavItem.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";

interface ISubroute {
  href: string;
  text: string;
}

interface IProps {
  href?: string;
  text: string;
  subroutes?: ISubroute[];
  dropdownIsOpen?: boolean;
  setDropdownIsOpen?: (open: boolean) => void;
  windowWidth?: number;
  headerHeight?: number | null;
}

export default function NavItem({
  href,
  text,
  subroutes = [],
  dropdownIsOpen = false,
  setDropdownIsOpen,
  headerHeight,
}: IProps) {
  const pathname = usePathname();

  const windowWidth = useWindowWidth();

  return subroutes.length > 0 ? (
    <li className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
      <button
        className={`${styles.dropdownBtn} ${
          subroutes.some((route) => pathname === route.href)
            ? styles.active
            : ""
        }`}
        onClick={() =>
          setDropdownIsOpen ? setDropdownIsOpen(!dropdownIsOpen) : null
        }
      >
        {text} {dropdownIsOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {dropdownIsOpen ? (
        <ul
          style={{
            top:
              windowWidth && windowWidth > 700
                ? `${headerHeight}px`
                : "calc(100% + 1rem)",
          }}
        >
          {subroutes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={`${styles.link} ${
                  pathname === route.href ? styles.active : ""
                }`}
                onClick={() =>
                  setDropdownIsOpen ? setDropdownIsOpen(false) : null
                }
              >
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  ) : href ? (
    <li>
      <Link
        href={href}
        className={`${styles.link} ${pathname === href ? styles.active : ""}`}
      >
        {text}
      </Link>
    </li>
  ) : null;
}
