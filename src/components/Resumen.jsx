import React, { Fragment } from "react";
import  { PrimeraMayuscula } from "../helper";
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
    color: #fff;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #00838f;
`

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos

    if (marca === '' || year === '' || plan === '') return null;

    return (
		<ContenedorResumen>
			<h2>Resumen cotización</h2>
			<ul>
				<li>Marca: {PrimeraMayuscula(marca)}</li>
				<li>Plan: {PrimeraMayuscula(plan)}</li>
				<li>Año: {PrimeraMayuscula(year)}</li>
			</ul>
		</ContenedorResumen>
	);
}
 
export default Resumen;