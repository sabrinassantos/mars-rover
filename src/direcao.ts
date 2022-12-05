import { DirecaoRepository } from "./entities/marsRover/direccao.repository";

export enum DirecaoEnum {
    Norte = "N",
    Leste = "E",
    Sul = "S",
    Oeste = "W"
}

  export class Direcao implements DirecaoRepository{

    private direcao: DirecaoEnum;

    constructor(direcao: DirecaoEnum) {
      this.direcao = direcao
    }  

    giraParaDireita = (direcao: DirecaoEnum) : DirecaoEnum => {
      switch (direcao) {
        case DirecaoEnum.Norte:
          this.direcao = DirecaoEnum.Leste;
          break;
        case DirecaoEnum.Leste:
          this.direcao = DirecaoEnum.Sul;
          break;
        case DirecaoEnum.Sul:
          this.direcao = DirecaoEnum.Oeste;
          break;
        case DirecaoEnum.Oeste:
          this.direcao = DirecaoEnum.Norte;
          break;
        default:
          break;
      }
      return this.direcao;
    }
  
  giraParaEsquerda = (direcao: DirecaoEnum) : DirecaoEnum => {
      switch (direcao) {
        case DirecaoEnum.Norte:
          this.direcao = DirecaoEnum.Oeste;
          break;
        case DirecaoEnum.Leste:
          this.direcao = DirecaoEnum.Norte;
          break;
        case DirecaoEnum.Sul:
          this.direcao = DirecaoEnum.Leste;
          break;
        case DirecaoEnum.Oeste:
          this.direcao = DirecaoEnum.Sul;
          break;
        default:
          break;
      }
      return this.direcao;
  }

  
  }