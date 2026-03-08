import React from 'react';
import Container from '../atoms/Container';
import SectionTitle from '../atoms/SectionTitle';
import BenefitCard from '../molecules/BenefitCard';
import './BenefitsSection.css';

const benefitsData = [
  { icon: '🐾', title: 'Amor Incondicional', description: 'Ganhe um companheiro para todas as horas, que vai te encher de alegria e carinho.' },
  { icon: '❤️', title: 'Saúde e Bem-estar', description: 'Estudos mostram que ter um pet reduz o estresse e melhora a saúde cardiovascular.' },
  { icon: '🤝', title: 'Apoio Pós-Adoção', description: 'Oferecemos suporte veterinário e comportamental para toda a vida do animal.' },
  { icon: '🏡', title: 'Lar Temporário', description: 'Se não puder adotar, seja um lar temporário e ajude um animal a se preparar.' },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="benefits">
      <Container>
        <SectionTitle 
          title="Por que adotar?" 
          subtitle="A adoção é um ato de amor que transforma duas vidas: a sua e a do animal."
        />
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;