import styled from "styled-components";


const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;
`;

const Titulo = styled.h2`
  font-size: var(--step-4);
  color: #fff;
  padding-bottom: 1rem;
`;

const EstilosSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 104px;
    height: 104px;
    margin: 8px;
    border: 10px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (  
    <Contenedor>
      <Titulo>Cotizando...</Titulo>
      <EstilosSpinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </EstilosSpinner>
    </Contenedor>
  );
}
 
export default Spinner;