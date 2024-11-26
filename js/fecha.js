export const mesArray = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo" , "Junio" , "Julio" , "Agosto" , "septiembre" , "Octubre" , "Noviembre" , "Diciembrer"];

export function fecha(mesArray){
    let fecha = new Date();
    let dia = fecha.getDate()
    let mes = fecha.getMonth();

    return `${dia} ${mesArray[mes].substring(0 , 3)}`
}