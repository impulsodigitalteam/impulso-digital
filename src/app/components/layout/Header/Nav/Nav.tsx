import { useEffect, useState } from "react";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import styles from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

interface IProps {
  headerHeight: number | null;
  mobileMenuIsOpen: boolean;
}

function Nav({ headerHeight, mobileMenuIsOpen }: IProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownIsOpen(false);
    };
    if (dropdownIsOpen) {
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [dropdownIsOpen]);

  return (
    <nav
      className={styles.nav}
      style={
        (windowWidth && windowWidth > 700) || mobileMenuIsOpen
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <ul className={styles.menuItems}>
        <NavItem href="/" text="Inicio" />
        <NavItem
          text="Servicios"
          subroutes={[
            { href: "/desarrollo-web", text: "Desarrollo Web" },
            { href: "/e-commerce", text: "E-Commerce" },
            { href: "/publicidad-digital", text: "Publicidad Digital" },
          ]}
          dropdownIsOpen={dropdownIsOpen}
          setDropdownIsOpen={setDropdownIsOpen}
          headerHeight={headerHeight}
        />
      </ul>
    </nav>
  );
}

export default Nav;
