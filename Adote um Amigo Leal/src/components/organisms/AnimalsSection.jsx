import React from 'react';
import Container from '../atoms/Container';
import SectionTitle from '../atoms/SectionTitle';
import AnimalCard from '../molecules/AnimalCard';
import './AnimalsSection.css';

const animalsData = [
  {
    id: 1,
    name: 'Rex',
    age: '3 anos',
    breed: 'Vira-lata (porte médio)',
    location: 'São Paulo, SP',
    description: 'Amigável e cheio de energia, adora brincar com bolinhas e fazer novos amigos.',
    temperaments: ['Amigável', 'Brincalhão', 'Energético'],
    image: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=600',
  },
  {
    id: 2,
    name: 'Mia',
    age: '2 anos',
    breed: 'Siamês',
    location: 'São Paulo, SP',
    description: 'Carinhosa e tranquila, adora um colo e uma janela para ver o movimento.',
    temperaments: ['Carinhosa', 'Tranquila', 'Curiosa'],
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600',
  },
  {
    id: 3,
    name: 'Bob',
    age: '4 anos',
    breed: 'Vira-lata (porte grande)',
    location: 'São Paulo, SP',
    description: 'Calmo e protetor, já viveu em um quintal e agora busca um lar com espaço.',
    temperaments: ['Calmo', 'Protetor', 'Leal'],
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600',
  },
];

const AnimalsSection = () => {
  return (
    <section id="animais" className="animals">
      <Container>
        <SectionTitle 
          title="Quem espera por você" 
          subtitle="Todos os nossos animais são vermifugados, vacinados e castrados. Basta escolher seu novo melhor amigo!"
        />
        <div className="animals-grid">
          {animalsData.map(animal => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
        <div className="animals-more">
          <button className="btn btn-secondary">Ver Mais Animais</button>
        </div>
      </Container>
    </section>
  );
};

export default AnimalsSection;