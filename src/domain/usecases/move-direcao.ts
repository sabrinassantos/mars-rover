import { DirecaoEnum } from "../../direcao";
import { DirecaoRepository } from "../repositories/direcao.repository";

export class MoveDirecao implements DirecaoRepository {

    private direcao: DirecaoEnum;
    constructor( 
        direcao: DirecaoEnum
    ){
        this.direcao = direcao
    }

    giraParaDireita = (direcao: DirecaoEnum) : DirecaoEnum => {
        switch (direcao) {
          case DirecaoEnum.Norte:
            direcao = DirecaoEnum.Leste;
            break;
          case DirecaoEnum.Leste:
            direcao = DirecaoEnum.Sul;
            break;
          case DirecaoEnum.Sul:
            direcao = DirecaoEnum.Oeste;
            break;
          case DirecaoEnum.Oeste:
            direcao = DirecaoEnum.Norte;
            break;
          default:
            break;
        }
        return direcao;
      }
    
    giraParaEsquerda = (direcao: DirecaoEnum) : DirecaoEnum => {
        switch (direcao) {
          case DirecaoEnum.Norte:
            direcao = DirecaoEnum.Oeste;
            break;
          case DirecaoEnum.Leste:
            direcao = DirecaoEnum.Norte;
            break;
          case DirecaoEnum.Sul:
            direcao = DirecaoEnum.Leste;
            break;
          case DirecaoEnum.Oeste:
            direcao = DirecaoEnum.Sul;
            break;
          default:
            break;
        }
        return direcao;
    }
}