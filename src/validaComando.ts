export const validaComando = (comandoArray: string[]) :  boolean => {
   const comandosValidos = ['L', 'R', 'M'];
   const retorno = comandoArray.every(c => {
    if (!comandosValidos.includes(c)){
        return false;
    }
    return true;
   })
 return retorno;
    
 
 }

 
 