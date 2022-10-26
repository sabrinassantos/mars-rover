import { Direcao } from "../../direcao";
import { Coordenada } from "../coordenada";
import { MarsRover } from "./marsRover";


describe('Testing MoveParaSul', () => {
   
    it('se eixo Y da Coordenada for maior que 10, deve retornar Y=0"', () => {
        const coordenadaMock = new Coordenada(0,11);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Sul);
       
        const sut = marsRoverMock.moveParaSul();
        expect(sut.y).toBe(0);
    });

    it('se eixo Y da Coordenada for menor que 10 e maior que 0, deve retornar Y-1"', () => {
        const coordenadaMock = new Coordenada(0,1);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Sul);
       
        const sut = marsRoverMock.moveParaSul();
        expect(sut.y).toBe(0);
    });

    it('se eixo Y da Coordenada for menor que 0, deve retornar Y=10"', () => {
        const coordenadaMock = new Coordenada(0,-1);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Sul);
       
        const sut = marsRoverMock.moveParaSul();
        expect(sut.y).toBe(10);
    });

});