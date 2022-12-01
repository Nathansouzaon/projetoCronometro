export function tempoParaSegundos(tempo:string){
    //split pega uma string pega um caracter e quebra essa string em um array em varias strings

    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

    const horasEmSegundos = Number(horas) * 3600;//1 hora equivale 3600 segundos
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos); 
}