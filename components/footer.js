import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.columns}>
      <h2 className={styles.column}>About AFF</h2>
      <p>Africa Fintech Foundry (AFF) aims to nurture and accelerate the growth of Fintech startups in Africa.</p>
      <p >&copy; 2021 Africa Fintech Foundry</p> 
    </div>
    <div className={styles.columns}>
      <h2 className={styles.column}>Contact Us</h2>
      <p ><span className= {`${styles.materialIcons} material-symbols-outlined`}>mail</span>aff@africafintechfoundry.com</p>
      <p ><span className= {`${styles.materialIcons} material-symbols-outlined`}>phone_iphone</span>Call us: (+234) 1 236 4058</p>
      <p ><span className= {`${styles.materialIcons} material-symbols-outlined`}>location_on</span>1216, Ibiyinka Olorunbe, Off Amodu Ojikutu, VI</p>
    </div>
    <div className={styles.columns}>
      <h2 className={styles.column}>NewsLetter </h2>
      <p>Submit your email address to subscribe to our newsletter. </p>
      <div className={styles.inputContainer}>
      <input className={styles.input} placeholder="Email"/>
      <span className={`${styles.mailIcon} material-symbols-outlined`}>mail</span>
      </div>
    </div>
    </div>
  );
};

export default Footer;