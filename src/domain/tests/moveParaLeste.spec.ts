import { Direcao } from "../../direcao";
import { Coordenada } from "../usecases/move-coordenada";
import { MarsRover } from "./marsRover";


describe('Testing MoveParaLeste', () => {
   
    it('se eixo X da Coordenada for maior que 10, deve retornar X=0"', () => {
        const coordenadaMock = new Coordenada(11,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaLeste();
        expect(sut.x).toBe(0);
    });

    it('se eixo X da Coordenada for igual a 10, deve retornar X=0"', () => {
        const coordenadaMock = new Coordenada(10,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaLeste();
        expect(sut.x).toBe(0);
    });

    it('se eixo X da Coordenada for menor que 0, deve retornar X=10"', () => {
        const coordenadaMock = new Coordenada(-1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaLeste();
        expect(sut.x).toBe(10);
    });

    it('se eixo X da Coordenada for menor que 10 e maior que 0, deve retornar X+1"', () => {
        const coordenadaMock = new Coordenada(1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaLeste();
        expect(sut.x).toBe(2);
    });

    it('se eixo X da Coordenada for igual 0, deve retornar X=0"', () => {
        const coordenadaMock = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(10);
    });

    it('eixo Y da Coordenada não deve alterar valor', () => {
        const coordenadaMock = new Coordenada(1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaLeste();
        expect(sut.y).toBe(0);
    });
});