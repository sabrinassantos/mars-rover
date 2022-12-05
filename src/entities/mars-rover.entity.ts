import { DirecaoEnum } from "../direcao";
import { CoordenadaEntity } from "./coordenada.entity";

export class MarsRoverEntity {
    coordenada: CoordenadaEntity;
    direcao: DirecaoEnum;

    constructor(
        coordenada: CoordenadaEntity,
        direcao: DirecaoEnum,
       
    ){
        this.coordenada = coordenada;
        this.direcao = direcao;
    }
}