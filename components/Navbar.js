import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
