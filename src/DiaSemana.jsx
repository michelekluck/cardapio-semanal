
import React from 'react'
import './DiaSemana.css'

const DiaSemana = ({ day, menu }) => {
    return (
        <div className='caixa-semana'>
            <h2 className='titulo-semana'>{day}</h2>
            <p>{menu}</p>
        </div>
    );
};

export default DiaSemana;