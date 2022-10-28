import { Coordenada } from "../coordenada";
import { Direcao } from "../../direcao";

export class MarsRover {
    constructor(
        public coordenada: Coordenada,
        public direcao: Direcao
    ){}

    voltaParaFimSeNegativo = () => 10;
    voltaParaInicioSeMaior = () => 0;
    
    moveParaNorte() : Coordenada{     
      this.coordenada.y = this.coordenada.y < 0 ? this.voltaParaFimSeNegativo() : this.coordenada.y + 1 > 10 ? this.voltaParaInicioSeMaior() : this.coordenada.y + 1;
      return this.coordenada;
    }

    moveParaSul() : Coordenada{
      this.coordenada.y =  this.coordenada.y > 10 ? this.voltaParaInicioSeMaior() : this.coordenada.y - 1 < 0 ? this.voltaParaFimSeNegativo() : this.coordenada.y - 1;
      return this.coordenada;
    }

    moveParaLeste() : Coordenada{
      this.coordenada.x = this.coordenada.x < 0 ? this.voltaParaFimSeNegativo() : this.coordenada.x + 1 > 10 ? this.voltaParaInicioSeMaior() : this.coordenada.x + 1;
      return this.coordenada;
    }
    moveParaOeste(): Coordenada{
      this.coordenada.x = this.coordenada.x > 10 ? this.voltaParaInicioSeMaior() : this.coordenada.x - 1 < 0 ? this.voltaParaFimSeNegativo() : this.coordenada.x - 1;
      return this.coordenada;
    }

    move = (marsRover: MarsRover): MarsRover =>{
        switch (marsRover.direcao) {
            case Direcao.Norte:
                this.moveParaNorte();
                break;
            case Direcao.Sul:
               this.moveParaSul();
                break;
            case Direcao.Oeste:
                this.moveParaOeste();
                break;
            case Direcao.Leste:
                this.moveParaLeste();
                break;
            default:
                break;
        }
        return marsRover;
    };

    giraParaDireita = (marsRover: MarsRover) : MarsRover => {
        switch (marsRover.direcao) {
          case Direcao.Norte:
            marsRover.direcao = Direcao.Leste;
            break;
          case Direcao.Leste:
            marsRover.direcao = Direcao.Sul;
            break;
          case Direcao.Sul:
            marsRover.direcao = Direcao.Oeste;
            break;
          case Direcao.Oeste:
            marsRover.direcao = Direcao.Norte;
            break;
          default:
            break;
        }
        return marsRover;
      }
    
    giraParaEsquerda = (marsRover: MarsRover) : MarsRover => {
        switch (marsRover.direcao) {
          case Direcao.Norte:
            marsRover.direcao = Direcao.Oeste;
            break;
          case Direcao.Leste:
            marsRover.direcao = Direcao.Norte;
            break;
          case Direcao.Sul:
            marsRover.direcao = Direcao.Leste;
            break;
          case Direcao.Oeste:
            marsRover.direcao = Direcao.Sul;
            break;
          default:
            break;
        }
        return marsRover;
    }
    
}