import styled from "styled-components";

const ResultadoDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Parrafo = styled.p`
  font-size: var(--step--1);

  span {
    font-weight: 900;
  }
`;

const Precio = styled.p`
  font-size: var(--step-1);

  span {
    font-weight: 900;
  }
`;

const Cotizacion = ({resultado}) => {

  let PRICE = '', 
      HIGHDAY = '', 
      LOWDAY = '', 
      CHANGEPCT24HOUR = '', 
      LASTUPDATE = '';

  if(Object.keys(resultado).length === 0){
    return null;
  }
  else {
    PRICE = resultado.PRICE;
    HIGHDAY = resultado.HIGHDAY;
    LOWDAY = resultado.LOWDAY;
    CHANGEPCT24HOUR = resultado.CHANGEPCT24HOUR;
    LASTUPDATE = resultado.LASTUPDATE;
  }
      
  return (  
    <ResultadoDiv>
      <Precio>El precio es: <span>{PRICE}</span></Precio>
      <Parrafo>
        El precio más alto del día: <span>{HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        El precio más bajo del día: <span>{LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>Última Actialización: <span>{LASTUPDATE}</span>
      </Parrafo>
    </ResultadoDiv>
  );
}
 
export default Cotizacion;