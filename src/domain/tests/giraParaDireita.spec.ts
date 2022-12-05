import { Coordenada } from "../usecases/move-coordenada";
import { Direcao } from "../../direcao";
import { MarsRover } from "../../entities/marsRover";

describe('Testing giraParaDireita', () => {

    it('se direção for Norte deve mudar direção para Leste', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Norte) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock);
    
        expect(sut.direcao).toBe(Direcao.Leste);
    });

    it('se direção for Leste deve mudar direção para Sul', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Leste) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock);
    
        expect(sut.direcao).toBe(Direcao.Sul);
    });
  
    it('se direção for Sul deve mudar direção para Oeste', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Sul) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock);
    
        expect(sut.direcao).toBe(Direcao.Oeste);
    });

    it('se direção for Oeste deve mudar direção para Norte', () => {
        const coordenada = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenada, Direcao.Oeste) ;
        const sut = marsRoverMock.giraParaDireita(marsRoverMock);
    
        expect(sut.direcao).toBe(Direcao.Norte);
    });

});
