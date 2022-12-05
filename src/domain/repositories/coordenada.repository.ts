import { DirecaoEnum } from "../../direcao";
import { CoordenadaEntity } from "../../entities/coordenada.entity";

export interface CoordenadaRepository{
    moveParaNorte(coordenada: CoordenadaEntity) : CoordenadaEntity;
    moveParaSul(coordenada: CoordenadaEntity) : CoordenadaEntity;
    moveParaLeste(coordenada: CoordenadaEntity) : CoordenadaEntity;
    moveParaOeste(coordenada: CoordenadaEntity): CoordenadaEntity;
    move(direcao: DirecaoEnum, coordenada: CoordenadaEntity): CoordenadaEntity
}