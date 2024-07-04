import React from 'react';
import styles from './card.module.css';

const Card = ({ title, description, iconName }) => {
  return (
    <div className={styles.card}>
      <i className = {`${styles.materialIcons} material-symbols-outlined`}>{iconName}</i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
