import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarCenter}>
        <Image src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.navbarItems}>
          <a href="/"><h3>HOME</h3></a>
          <a href="/about"><h3>ABOUT US</h3></a>
          <a href="/accelerator"><h3>ACCELERATOR</h3></a>
          <a href="/fda"><h3>FDA</h3></a>
          <a href="/blog"><h3>BLOG</h3></a>
          <a href="/contact"><h3>CONTACT US</h3></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
