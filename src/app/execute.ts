import { DirecaoEnum } from "../direcao";
import { CoordenadaEntity } from "../entities/coordenada.entity";
import { MarsRoverEntity } from "../entities/mars-rover.entity";
import { validaComando } from "../validaComando";
import imprimeMarsRover from "./imprimeMarsRover";
import { ComandoRepository } from "../domain/repositories/comando.repository";
import comando from "../domain/usecases/comando";

export const execute = (comandoInput: string): string => {

    const coordenada = new CoordenadaEntity(0,0);
    
    const comandoArray = Array.from(comandoInput.toUpperCase());
    let marsRover = new MarsRoverEntity(coordenada, DirecaoEnum.Norte);
    if (validaComando(comandoArray)){
        comandoArray.forEach(c => {
            comando(c, marsRover);
        });
    }

    return imprimeMarsRover(marsRover);
};
