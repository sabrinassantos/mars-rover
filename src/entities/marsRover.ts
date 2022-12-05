
import {  DirecaoEnum } from "../direcao";
import { MoveCoordenada } from "../domain/usecases/move-coordenada";
import { CoordenadaEntity } from "./coordenada.entity";

export class MarsRover {
  
    constructor(
        public coordenada: CoordenadaEntity,
        public direcao: DirecaoEnum,
        public moveCoordenada: MoveCoordenada
    ){}  
    
}