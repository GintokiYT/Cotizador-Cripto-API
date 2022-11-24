import { useState, useEffect } from 'react';
import styled from 'styled-components';
import imagen from './img/cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';

import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  color: #fff;
  text-align: left;
  font-weight: 700;
  margin-bottom: 50px;
  margin-top: 80px;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block; 
  }
`;

const App = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState(false);

  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState();

  useEffect(() => {
    if(moneda === '' || criptomoneda === '') return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}` 

    const obtenerCotizacion = async () => {
      const response = await axios.get(url);
      const data = await response.data.DISPLAY[criptomoneda][moneda]

      // mostrar el spinner
      guardarCargando(true);

      // ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        guardarCargando(false);
      }, 1500);

      guardarResultado(data);
    }
    obtenerCotizacion();
  }, [moneda, criptomoneda])


  const componente = (cargando) 
                      ? <Spinner /> 
                      : <Cotizacion resultado={resultado}/>

  return (
    <Contenedor>
      <div style={{padding: '0 1rem'}}>
        <Imagen 
          src={imagen}
          alt='Imagen Cripto'
        />
      </div>
      <div style={{padding: '0 1rem'}}>
        <Heading className='text-size-5'>
          Cotiza criptomonedas al instante
        </Heading>
        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
