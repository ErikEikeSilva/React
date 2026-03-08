import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-title section-title-${align}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;