import React, { useState } from 'react';
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from "../helper";

const Campo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	display: block;
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
	--webkit-appearance: none;
`;

const InputRadio = styled.input`
	margin: 0 1rem;
`;

const Boton = styled.button`
	background-color: #00838f;
	font-size: 16px;
	width: 100%;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	transition: all .2s;
	margin-top: 2rem;

	&:hover {
		cursor: pointer;
		background-color: #26c6da;
	}
`;

const Error = styled.div`
	width: 100%;
	color: white;
	text-align: center;
	margin-bottom: 2rem;
	padding: 1rem;
	background-color: red;
`;

const Formulario = () => {

	//! guardar datos introducidos. Se podría hacer como variables separadas
	const [datos, guardarDatos] = useState({
		marca: '',
		year: '',
		plan: ''
	})

	//! state error
	const [error, guardarError] = useState(false)

	//! extraemos datos del state
	const { marca, year, plan } = datos

	//! leer datos formulario y pasarlos al state
	const obtenerInformacion = e => {
		guardarDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	}

	//! al enviar datos formulario, submit
	const cotizarSeguro = e => {
		e.preventDefault();

		if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
			guardarError(true);
			return;
		}

		guardarError(false);

		//* definir base de precio de 2000. A partir de ahí se encarece o rebaja seguro
		let resultado = 2000;

		//* obtener diferencia de años
		const diferencia = obtenerDiferenciaYear(year);
		//console.log(diferencia)

		//* por cada año restar el 3%
		resultado -= (diferencia * 3 * resultado) / 100;
		//console.log(resultado)

		//* americano 15%, asiatico 5%, europeo 30%
		resultado = resultado * calcularMarca(marca);
		//console.log(resultado)

		//* basico aumenta 20%, completo 50%
		resultado = parseFloat(calcularPlan(plan) * resultado).toFixed(2);
		console.log(resultado);

		//* total

	};
	
    return (
		<form onSubmit={cotizarSeguro}>
			{ error ? <Error>Todos los campos son obligatorios</Error> : null }

			<Campo>
				<Label>Marca</Label>
				<Select name="marca" value={marca} onChange={obtenerInformacion}>
					<option value="">-- Seleccionar --</option>
					<option value="americano">Americano</option>
					<option value="europeo">Europeo</option>
					<option value="asiatico">Asiático</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Año</Label>
				<Select name="year" value={year} onChange={obtenerInformacion}>
					<option value="">-- Seleccione --</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
				</Select>
			</Campo>
			<Campo>
				<Label>Plan</Label>
				<InputRadio type="radio" name="plan" value="basico" check={plan === "basico"} onChange={obtenerInformacion} />
				Básico
				<InputRadio type="radio" name="plan" value="completo" check={plan === "completo"} onChange={obtenerInformacion} />
				Completo
			</Campo>
			<Boton type="submit">Cotizar</Boton>
		</form>
	);
}
 
export default Formulario;