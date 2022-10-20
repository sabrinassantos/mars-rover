import { Coordenada } from "./coordenada";
import { Direcao } from "./direcao";

export class MarsRover {
    constructor(
        public coordenada: Coordenada,
        public direcao: Direcao
    ){}

    move = (marsRover: MarsRover): MarsRover =>{
        switch (marsRover.direcao) {
            case Direcao.Norte:
                marsRover.coordenada = this.coordenada.moveParaNorte(this.coordenada);
                break;
            case Direcao.Sul:
                marsRover.coordenada = this.coordenada.moveParaSul(this.coordenada);
                break;
            case Direcao.Oeste:
                marsRover.coordenada = this.coordenada.moveParaOeste(this.coordenada);
                break;
            case Direcao.Leste:
                marsRover.coordenada = this.coordenada.moveParaLeste(this.coordenada);
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
        return marsRover
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