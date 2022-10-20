export const validaComando = (comandoArray: string[]) :  boolean => {
   const comandosValidos = ['L', 'R', 'M'];
   const retorno = comandoArray.every(c => {
    if (!comandosValidos.includes(c)){
        return false;
    }
    return true;
   })
// let retorno : boolean = true;
// comandoArray.forEach(c => {
//  retorno = (c !='L' && c !== 'R' && c !== 'M') ?  false : true;
//  if(retorno){
//      return
//  }
// });
 console.log('retorno', retorno)
 return retorno;
    
 
 }
 