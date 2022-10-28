import { Direcao } from "../direcao";
import { Coordenada } from "../entities/coordenada";
import { MarsRover } from "../entities/marsRover/marsRover";
import { validaComando } from "../validaComando";
import comando from "./comando";
import imprimeMarsRover from "./imprimeMarsRover";

export const execute = (comandoInput: string): string => {
    const coordenada = new Coordenada(0,0);
    const direcao = Direcao.Norte;  
    
    const comandoArray = Array.from(comandoInput.toUpperCase());
    let marsRover = new MarsRover(coordenada, direcao);
    if (validaComando(comandoArray)){
        comandoArray.forEach(c => {
            comando(c, marsRover);
        });
    }
    return imprimeMarsRover(marsRover);
};