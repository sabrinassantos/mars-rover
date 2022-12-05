


import { Direcao } from "../direcao";
import comando from "../domain/usecases/comando";
import { Coordenada } from "../domain/usecases/move-coordenada";
import { MarsRover } from "../entities/marsRover";

describe('Testing Comando', () => {

    it('se Comando for "L" deve chamar GiraParaEsquerda', () => {
        const coordenadaMock = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "giraParaEsquerda");
        comando("L", marsRoverMock);
        expect(spy).toBeCalledTimes(1);
    });

    it('se Comando for "R" deve chamar GiraParaDireita', () => {
        const coordenadaMock = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "giraParaDireita");
        const sut = comando("R", marsRoverMock);
        expect(spy).toBeCalledTimes(1);
    });

    it('se Comando for "M" deve chamar "move"', () => {
        const coordenadaMock = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "move");
        const sut = comando("M", marsRoverMock);
        expect(spy).toBeCalledTimes(1);
    });
});

