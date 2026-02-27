import React from 'react';
import './CheckinForm.css';

const CheckinForm = () => {
  const [formData, setFormData] = React.useState(() => {
    const saved = localStorage.getItem('checkinData');
    return saved ? JSON.parse(saved) : {
      nome: '',
      email: '',
      telefone: '',
      dataCheckin: '',
      numeroPessoas: 1,
      observacoes: ''
    };
  });

  React.useEffect(() => {
    localStorage.setItem('checkinData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Check-in realizado com sucesso!');
  };

  const handleClear = () => {
    if (window.confirm('Deseja limpar todos os dados?')) {
      const emptyData = {
        nome: '',
        email: '',
        telefone: '',
        dataCheckin: '',
        numeroPessoas: 1,
        observacoes: ''
      };
      setFormData(emptyData);
      localStorage.setItem('checkinData', JSON.stringify(emptyData));
    }
  };

  return (
    <div className="form-container">
      <h2>Check-in Mobile</h2>
      <p className="subtitle">Preencha seus dados para realizar o check-in</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone *</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dataCheckin">Data do Check-in *</label>
            <input
              type="date"
              id="dataCheckin"
              name="dataCheckin"
              value={formData.dataCheckin}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="numeroPessoas">Nº de Pessoas *</label>
            <input
              type="number"
              id="numeroPessoas"
              name="numeroPessoas"
              value={formData.numeroPessoas}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="observacoes">Observações</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            placeholder="Alguma observação especial?"
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Realizar Check-in
          </button>
          <button type="button" className="btn-clear" onClick={handleClear}>
            Limpar Dados
          </button>
        </div>
      </form>

      <div className="info-message">
        <small>✓ Seus dados são salvos automaticamente</small>
      </div>
    </div>
  );
};

export default CheckinForm;