// components/Team.jsx - Também corrigido com as mesmas imagens de qualidade
import React from 'react';
import './Team.css';

const team = [
  {
    id: 1,
    name: 'Dra. Ana Silva',
    specialty: 'Dermatologista - CRM 12345',
    description: 'Especialista em dermatologia clínica e cirúrgica com 15 anos de experiência',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    social: ['linkedin', 'instagram']
  },
  {
    id: 2,
    name: 'Dr. Carlos Santos',
    specialty: 'Dermatologista - CRM 12346',
    description: 'Especialista em dermatologia estética e laser, referência em rejuvenescimento',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    social: ['linkedin', 'instagram']
  },
  {
    id: 3,
    name: 'Dra. Marina Costa',
    specialty: 'Dermatologista - CRM 12347',
    description: 'Especialista em tricologia e doenças dos cabelos',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    social: ['linkedin', 'instagram']
  },
  {
    id: 4,
    name: 'Dra. Patricia Oliveira',
    specialty: 'Dermatologista - CRM 12348',
    description: 'Especialista em dermatopediatria e doenças vasculares',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    social: ['linkedin', 'instagram']
  }
];

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Profissionais</span>
          <h2>Nossa Equipe</h2>
          <p className="section-description">
            Profissionais altamente qualificados dedicados à sua saúde
          </p>
        </div>

        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-social">
                  <a href="#" className="social-icon">in</a>
                  <a href="#" className="social-icon">ig</a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-specialty">{member.specialty}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;