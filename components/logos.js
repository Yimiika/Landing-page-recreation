import React from 'react';
import Image from 'next/image';
import styles from './logos.module.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.jpg';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';

const Logos = () => {
  return (
      <div className={styles.logos}>
        <Image src={logo1} alt="Logo1" className={styles.logo} />
        <Image src={logo2} alt="Logo2" className={styles.logo} />
        <Image src={logo3} alt="Logo3" className={styles.logo} />
        <Image src={logo4} alt="Logo4" className={styles.logo} />
        <Image src={logo5} alt="Logo5" className={styles.logo} />
        <Image src={logo6} alt="Logo6" className={styles.logo} />
      </div>
  );
}

export default Logos;
