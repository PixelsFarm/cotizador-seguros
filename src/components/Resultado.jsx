import React from 'react';
import styled from "@emotion/styled";

const Mensaje = styled.p`
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgb(127,244,237);
`

const Total = styled.p`
    color: #00838f;
    font-weight: bold;
    margin: 1rem 0 0 0;
    text-transform: uppercase;
`;

const Resultado = ({ cotizacion }) => {

    return (
        (cotizacion === 0 ) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
            : <Total>El total es: { cotizacion } $</Total>
    )
}
 
export default Resultado;