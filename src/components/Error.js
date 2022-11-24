import styled from "styled-components";

const MensajeError = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: var(--step-2);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

const Error = ({mensaje}) => {
  return (  
    <MensajeError>{mensaje}</MensajeError>
  );
}
 
export default Error;