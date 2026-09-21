import React, { useState } from 'react';

function DashboardAdmin() {
  const [agendamentos] = useState([
    { id: 1, nome: 'Maria das Graças', especialidade: 'Clínico Geral', data: '2026-09-22', status: 'Confirmado' },
    { id: 2, nome: 'José da Silva', especialidade: 'Odontologia', data: '2026-09-22', status: 'Aguardando' },
    { id: 3, nome: 'Antônio Ferreira', especialidade: 'Pediatria', data: '2026-09-23', status: 'Confirmado' }
  ]);

  return (
    <div className="dashboard-container">
      <h2>⚙️ Painel Administrativo - PSF Garimpo</h2>
      <p>Gestão de Vagas e Consultas Agendadas</p>

      <div className="cards-resumo">
        <div className="card-stat">
          <h4>Total de Agendamentos</h4>
          <span>{agendamentos.length}</span>
        </div>
        <div className="card-stat">
          <h4>Vagas Restantes Hoje</h4>
          <span>12</span>
        </div>
      </div>

      <div className="tabela-responsive">
        <h3>Lista de Pacientes Agendados</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Paciente</th>
              <th>Especialidade</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.especialidade}</td>
                <td>{item.data}</td>
                <td>
                  <span className={`badge ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAdmin;
