import { Direcao } from "../../direcao";
import { Coordenada } from "../coordenada";
import { MarsRover } from "./marsRover";


describe('Testing MoveParaOeste', () => {
   
    it('se eixo X da Coordenada for maior que 10, deve retornar X=0"', () => {
        const coordenadaMock = new Coordenada(11,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(0);
    });

    it('se eixo X da Coordenada for igual a 10, deve retornar X=0"', () => {
        const coordenadaMock = new Coordenada(10,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(9);
    });

    it('se eixo X da Coordenada for menor que 0, deve retornar X=10"', () => {
        const coordenadaMock = new Coordenada(-1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(10);
    });

    it('se eixo X da Coordenada for menor que 10 e maior que 0, deve retornar X-1"', () => {
        const coordenadaMock = new Coordenada(1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(0);
    });

    it('se eixo X da Coordenada for igual 0, deve retornar X=10"', () => {
        const coordenadaMock = new Coordenada(0,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.x).toBe(10);
    });

    it('eixo Y da Coordenada não deve alterar valor', () => {
        const coordenadaMock = new Coordenada(1,0);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
       
        const sut = marsRoverMock.moveParaOeste();
        expect(sut.y).toBe(0);
    });
    
});