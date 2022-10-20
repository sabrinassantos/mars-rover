import { Coordenada } from "../coordenada";
import { Direcao } from "../../direcao";
import { MarsRover } from "./marsRover";

describe('Testing giraParaDireita', () => {

    it('se direção for Norte deve mudar direção para Leste', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Norte) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock)
    
        expect(sut.direcao).toBe(Direcao.Leste);
    });

    it('se direção for Leste deve mudar direção para Sul', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Leste) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock)
    
        expect(sut.direcao).toBe(Direcao.Sul);
    });
  
    it('se direção for Sul deve mudar direção para Oeste', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Sul) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock)
    
        expect(sut.direcao).toBe(Direcao.Oeste);
    });

    it('se direção for Oeste deve mudar direção para Norte', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Oeste) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock)
    
        expect(sut.direcao).toBe(Direcao.Norte);
    });

});



describe('Testing Move', () => {
    const coordenadaMoock = new Coordenada(0,0);
    it('se direção for Norte deve chamar "moveParaNorte"', () => {
        const marsRoverMock = new MarsRover(coordenadaMoock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "moveParaNorte");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });
    it('se direção for Norte não deve chamar "moveParaSul"', () => {
        const marsRoverMock = new MarsRover(coordenadaMoock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "moveParaSul");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(0);
    });

    it('se direção for Sul deve chamar "moveParaSul"', () => {
        const marsRoverMock = new MarsRover(coordenadaMoock, Direcao.Sul);
        const spy = jest.spyOn(marsRoverMock, "moveParaSul");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });

    it('se direção for Oeste deve chamar "moveParaOeste"', () => {
        const marsRoverMock = new MarsRover(coordenadaMoock, Direcao.Oeste);
        const spy = jest.spyOn(marsRoverMock, "moveParaOeste");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });

    it('se direção for Leste deve chamar "moveParaLeste"', () => {
        const marsRoverMock = new MarsRover(coordenadaMoock, Direcao.Leste);
        const spy = jest.spyOn(marsRoverMock, "moveParaLeste");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });
});