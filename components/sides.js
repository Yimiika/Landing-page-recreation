import React from 'react';
import Image from 'next/image';
import styles from './sides.module.css';
import affImage from '../images/aff.jpg';

const Sides = ({heading, description }) => {
  return (
    <div className={styles.container}>
      <Image src={affImage} alt="affImage" className={styles.affImage} />
      <div className={styles.paragraph}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Sides;
