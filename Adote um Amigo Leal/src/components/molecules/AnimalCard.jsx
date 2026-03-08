import React from 'react';
import Button from '../atoms/Button';
import './AnimalCard.css';

const AnimalCard = ({ name, age, breed, location, image, description, temperaments }) => {
  return (
    <div className="animal-card">
      <div className="animal-card__image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="animal-card__content">
        <h3>{name}</h3>
        <p className="animal-card__breed">{breed}, {age}</p>
        <p className="animal-card__location">{location}</p>
        <p className="animal-card__description">{description}</p>
        <div className="animal-card__temperaments">
          {temperaments?.map((temp, index) => (
            <span key={index} className="temperament-tag">{temp}</span>
          ))}
        </div>
        <Button variant="primary" fullWidth>Quero Adotar</Button>
      </div>
    </div>
  );
};

export default AnimalCard;