import React from 'react';
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgb(127,244,237);
`

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    position: relative;
`

const Total = styled.p`
	position: relative;
	color: #00838f;
    font-weight: bold;
    text-align: center;
	text-transform: uppercase;
    margin: 1rem 0 0 0;
`;

const Resultado = ({ cotizacion }) => {

    return cotizacion === 0 ? (
		<Mensaje>Elige marca, año y tipo de seguro</Mensaje>
	) : (
		<ResultadoCotizacion>
			<TransitionGroup
                component="p"
                className="resultado"
            >
				<CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500 }}
                >
					<Total>El total es: {cotizacion} $</Total>
				</CSSTransition>
			</TransitionGroup>
		</ResultadoCotizacion>
	);
}
 
export default Resultado;