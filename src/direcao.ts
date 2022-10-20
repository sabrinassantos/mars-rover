import { MarsRover } from "./marsRover";

export enum Direcao {
    Norte = "N",
    Leste = "E",
    Sul = "S",
    Oeste = "W"
  }

  // export const giraParaDireita = (marsRover: MarsRover) : MarsRover => {
  //   switch (marsRover.direcao) {
  //     case Direcao.Norte:
  //       marsRover.direcao = Direcao.Leste;
  //       break;
  //     case Direcao.Leste:
  //       marsRover.direcao = Direcao.Sul;
  //       break;
  //     case Direcao.Sul:
  //       marsRover.direcao = Direcao.Oeste;
  //       break;
  //     case Direcao.Oeste:
  //       marsRover.direcao = Direcao.Norte;
  //       break;
  //     default:
  //       break;
  //   }
  //   return marsRover
  // }

  // export const giraParaEsquerda = (marsRover: MarsRover) : MarsRover => {
  //   switch (marsRover.direcao) {
  //     case Direcao.Norte:
  //       marsRover.direcao = Direcao.Oeste;
  //       break;
  //     case Direcao.Leste:
  //       marsRover.direcao = Direcao.Norte;
  //       break;
  //     case Direcao.Sul:
  //       marsRover.direcao = Direcao.Leste;
  //       break;
  //     case Direcao.Oeste:
  //       marsRover.direcao = Direcao.Sul;
  //       break;
  //     default:
  //       break;
  //   }
  //   return marsRover
  // }