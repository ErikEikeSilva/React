import React from 'react';
import './BenefitCard.css';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <div className="benefit-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;