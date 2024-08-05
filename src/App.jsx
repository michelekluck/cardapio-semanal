import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo_mommys.png' 
import DiaSemana from './DiaSemana.jsx'


function App() {
  // estado inicial
  const [semanaMenu, setSemanaMenu] = useState ([
    { day:"Segunda-Feira", menu:"Arroz, feijão, frango grelhado (filé de frango) e vagem no vapor"},
    { day:"Terça-feira", menu:"Arroz, strogonoff de frango (frango desfiado) e cenoura ralada no vapor"},
    { day:"Quarta-feira", menu:"Arroz, feijão, coxa de frango assada e batata assada"},
    { day:"quinta-feira", menu:"Arroz, macarrão com molho de tomate, carne moída e ervilha"},
    { day:"sexta-feira", menu:"Arroz, carne em cubos ao molho de tomate e purê de abóbora"}
  ]);

  // função para atualizar o cardapio
  const atualizarCardapio = () => { // arrow function
    const novoCardapio = [ // variavel
      // array de objetos
      { day:"Segunda-Feira", menu:"Arroz, feijão"},
      { day:"Terça-feira", menu:"Arroz, strogonoff de frango "},
      { day:"Quarta-feira", menu:"Arroz, feijão"},
      { day:"quinta-feira", menu:"Arroz, macarrão com molho de tomate"},
      { day:"sexta-feira", menu:"Arroz, carne em cubos"}
    ];
    setSemanaMenu(novoCardapio); // função setSemanaMenu é chamada com novoCardapio como argumento
  }

  // simulação para atualização semanal do cardapio
  useEffect(() => {
    const interval = setInterval(atualizarCardapio, 7 * 24 * 60 * 60 * 1000); // 1 semana
    return () => clearInterval(interval); // limpa o intervalo quando o componente for desmontado
  }, [])
  
  return (
    <div>
     <div className='header'>
      <header className='app-header'>
        <img src={logo} alt="Logo" className='logo' />
      </header>
     </div>
      <div className='semanas'>
        {semanaMenu.map((item, index) => ( 
          <DiaSemana key={index} day={item.day} menu={item.menu} />
        ))}
      </div>
    </div>
  );
}

export default App;
