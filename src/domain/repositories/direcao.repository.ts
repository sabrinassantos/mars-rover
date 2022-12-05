import { DirecaoEnum } from "../../direcao";

export interface DirecaoRepository{
    giraParaDireita(direcao: DirecaoEnum) : DirecaoEnum;
    giraParaEsquerda(direcao: DirecaoEnum) : DirecaoEnum;
}