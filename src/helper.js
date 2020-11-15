//! restamos año actual con año escogido en formulario
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

//! calcula total a pagar según marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05
            break;
        default:
            break;
    }

    return incremento
}
