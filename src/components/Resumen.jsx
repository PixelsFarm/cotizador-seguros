import React, { Fragment } from 'react';

const Resumen = ({ datos }) => {

    const { marca, year, plan } = datos

    if (marca === '' || year === '' || plan === '') return null;

    return (
		<Fragment>
			<h2>Resumen cotización</h2>
			<ul>
				<li>Marca:</li>
				<li>Plan:</li>
				<li>Año:</li>
			</ul>
		</Fragment>
	);
}
 
export default Resumen;