import { DirecaoEnum } from "../../direcao";
import { CoordenadaEntity } from "../../entities/coordenada.entity";
import { MarsRover } from "../../entities/marsRover";
import { CoordenadaRepository } from "../repositories/coordenada.repository";

export class MoveCoordenada implements CoordenadaRepository {

  constructor(){}

  private voltaParaFimSeNegativo = () => 10;
  private voltaParaInicioSeMaior = () => 0;

  moveParaNorte(coordenada: CoordenadaEntity) : CoordenadaEntity{     
    coordenada.y = coordenada.y < 0 ? this.voltaParaFimSeNegativo() : coordenada.y + 1 > 10 ? this.voltaParaInicioSeMaior() : coordenada.y + 1;
    return coordenada;
  }
  
  moveParaSul(coordenada: CoordenadaEntity) : CoordenadaEntity{
    coordenada.y =  coordenada.y > 10 ? this.voltaParaInicioSeMaior() : coordenada.y - 1 < 0 ? this.voltaParaFimSeNegativo() : coordenada.y - 1;
    return coordenada;
  }
  
  moveParaLeste(coordenada: CoordenadaEntity) : CoordenadaEntity{
    coordenada.x = coordenada.x < 0 ? this.voltaParaFimSeNegativo() : coordenada.x + 1 > 10 ? this.voltaParaInicioSeMaior() : coordenada.x + 1;
    return coordenada;
  }

  moveParaOeste(coordenada: CoordenadaEntity): CoordenadaEntity{
    coordenada.x = coordenada.x > 10 ? this.voltaParaInicioSeMaior() : coordenada.x - 1 < 0 ? this.voltaParaFimSeNegativo() : coordenada.x - 1;
    return coordenada;
  }

  move = (direcao: DirecaoEnum, coordenada: CoordenadaEntity): CoordenadaEntity =>{
    console.log('direcao', direcao)
    switch (direcao) {
        case DirecaoEnum.Norte:
          coordenada = this.moveParaNorte(coordenada);
            break;
        case DirecaoEnum.Sul:
          coordenada = this.moveParaSul(coordenada);
            break;
        case DirecaoEnum.Oeste:
          coordenada = this.moveParaOeste(coordenada);
            break;
        case DirecaoEnum.Leste:
          coordenada = this.moveParaLeste(coordenada);
            break;
        default:
            break;
    }
    return coordenada;
};
    
}