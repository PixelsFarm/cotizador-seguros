//! restamos año actual con año escogido en formulario
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}