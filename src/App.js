import './App.css';
import logo from './assets/logo_mommys.png' 
import DiaSemana from './DiaSemana.jsx'



function App() {
  return (
    <div>
     <div className='header'>
      <header className='app-header'>
        <img src={logo} alt="Logo" className='logo' />
      </header>
     </div>
      <div className='semanas'>
        <DiaSemana />
        <DiaSemana />
      </div>
     
    </div>
  );
}

export default App;
