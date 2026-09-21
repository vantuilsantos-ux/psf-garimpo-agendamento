import React from 'react';
import FormAgendamento from './components/FormAgendamento';
import DashboardAdmin from './components/DashboardAdmin';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🏥 PSF Garimpo de Capoeirana</h1>
        <p>Sistema Digital de Agendamento de Consultas</p>
      </header>

      <main>
        <FormAgendamento />
        <DashboardAdmin />
      </main>
    </div>
  );
}

export default App;
