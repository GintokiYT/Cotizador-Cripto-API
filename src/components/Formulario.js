import { useEffect, useState } from "react";
import useMoneda from "../hooks/useMoneda.js";
import useCriptomoneda from "../hooks/useCriptomoneda.js";
import styled from "styled-components";
import Axios from "axios";

import Error from "./Error.js";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: var(--step-0);
  padding: 15px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;

  &:hover {
    background: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

  // State del listado de criptomonedas
  const [ listaCripto, guardarCriptomonedas ] = useState([]);

  const Monedas = [
    { codigo: 'USD', nombre: 'Dolar Estadounidense'},
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
    { codigo: 'PEN', nombre: 'Sol Peruano' }
  ].sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0);

  // Utilizar useMoneda
  const [ moneda, SelectMonedas ] = useMoneda('Elige tu moneda', '', Monedas);
  // Utilizar useCriptomoneda
  const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listaCripto); 

  const [ error, guardarError ] = useState(false);


  // Ejecutar llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await Axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
  }, []);

  // Cuando el usuario hace Submit
  const handleSubmit = e => {
    e.preventDefault();

    // Validar que ambos campos tengan datos
    if(moneda === '' || criptomoneda === '') {
      guardarError(true);
      return;
    }

    // Si pasa la validacion
    guardarError(false);

    // Pasamos los datos del formulario al APP.js en su State
    guardarMoneda(moneda);
    guardarCriptomoneda(criptomoneda);

  };

  return (  
    <form
      onSubmit={handleSubmit}
    > 
      {error
        ? <Error mensaje='Todos los campos son obligatorios'/>
        : null
      }  

      <SelectMonedas />

      <SelectCripto />

      <Boton
        type='submit'
        value='Calcular'
      />
    </form>
  );
}
 
export default Formulario;

// Video 133