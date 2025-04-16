"use client";

import { useEffect, useRef, useState } from "react";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
import Nav from "./Nav/Nav";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const windowWidth = useWindowWidth();

  const pathname = usePathname();

  const [headerHeight, setHeaderHeight] = useState<null | number>(null);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    if (headerRef && headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth <= 700 && mobileMenuIsOpen) {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.scrollTop = 0;
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.style.overflowY = "auto";
    }
  }, [windowWidth, mobileMenuIsOpen]);

  useEffect(() => {
    if (mobileMenuIsOpen) {
      setMobileMenuIsOpen(false);
    }
  }, [pathname]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/img/logo.svg"
            alt="Logo"
            width={0}
            height={0}
            style={{ width: "auto", height: "100%" }}
            priority
          />
        </Link>
        <Nav headerHeight={headerHeight} mobileMenuIsOpen={mobileMenuIsOpen} />

        {windowWidth && windowWidth <= 700 ? (
          <button
            className={styles.hamburgerMenuBtn}
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? (
              <IoClose fontSize="2.75em" />
            ) : (
              <IoIosMenu fontSize="2.75em" />
            )}
          </button>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
