import { Fragment, useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: var(--step-0);
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: var(--step-0);
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
  // State de nuestro custom Hook
  const [ state, actualizarState ] = useState(stateInicial);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={ e => actualizarState(e.target.value) }
        value={state}
      >
         <option value='' disabled>-- Seleccione una criptomoneda --</option>
        { opciones.map( opcion => {
          const { Id, Name, FullName } = opcion.CoinInfo;
          return (
            <option value={Name} key={Id}>{FullName}</option>
          )
        })};
      </Select>
    </Fragment>
  );

  // Retornar State, interfaz y función que modifica el state
  return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;