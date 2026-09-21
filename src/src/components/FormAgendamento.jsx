import React, { useState } from 'react';

function FormAgendamento() {
  const [paciente, setPaciente] = useState({
    nome: '',
    cpf: '',
    especialidade: 'Clinico Geral',
    data: ''
  });

  const [confirmado, setConfirmado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente({ ...paciente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paciente.nome && paciente.cpf && paciente.data) {
      setConfirmado(true);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="card-agendamento">
      <h2>📅 Agendar Consulta</h2>
      
      {!confirmado ? (
        <form onSubmit={handleSubmit} className="form-responsive">
          <div className="form-group">
            <label htmlFor="nome">👤 Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              value={paciente.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">🪪 CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              value={paciente.cpf}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="especialidade">🩺 Especialidade Médica:</label>
            <select
              id="especialidade"
              name="especialidade"
              value={paciente.especialidade}
              onChange={handleChange}
            >
              <option value="Clinico Geral">Clínico Geral</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Odontologia">Odontologia</option>
              <option value="Enfermagem">Enfermagem / Vacinação</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="data">📆 Data da Consulta:</label>
            <input
              type="date"
              id="data"
              name="data"
              value={paciente.data}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-confirmar">
            ✅ Confirmar Agendamento
          </button>
        </form>
      ) : (
        <div className="comprovante-sucesso">
          <h3>✅ Agendamento Realizado com Sucesso!</h3>
          <div className="ticket">
            <p><strong>Paciente:</strong> {paciente.nome}</p>
            <p><strong>Especialidade:</strong> {paciente.especialidade}</p>
            <p><strong>Data:</strong> {paciente.data}</p>
            <p><strong>Local:</strong> PSF Garimpo de Capoeirana</p>
            <p className="senha-chamada">Senha: <strong>A-042</strong></p>
          </div>
          <button onClick={() => setConfirmado(false)} className="btn-voltar">
            ↩️ Fazer Novo Agendamento
          </button>
        </div>
      )}
    </div>
  );
}

export default FormAgendamento;
