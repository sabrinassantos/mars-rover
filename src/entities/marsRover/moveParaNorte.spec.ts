import { Direcao } from "../../direcao";
import { Coordenada } from "../coordenada";
import { MarsRover } from "./marsRover";


describe('Testing MoveParaNorte', () => {
   
    it('se eixo Y da Coordenada for maior que 10, deve retornar Y=0"', () => {
        const coordenadaMock = new Coordenada(0,10);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
       
        const sut = marsRoverMock.moveParaNorte();
        expect(sut.y).toBe(0);
    });

    it('se eixo Y da Coordenada for menor que 10 e maior que 0, deve retornar Y+1"', () => {
        const coordenadaMock = new Coordenada(0,1);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
       
        const sut = marsRoverMock.moveParaNorte();
        expect(sut.y).toBe(2);
    });

    it('se eixo Y da Coordenada for menor que 0, deve retornar Y=10"', () => {
        const coordenadaMock = new Coordenada(0,-1);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
       
        const sut = marsRoverMock.moveParaNorte();
        expect(sut.y).toBe(10);
    });

    it('Eixo X não deve alterar o valor"', () => {
        const coordenadaMock = new Coordenada(0,1);
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
       
        const sut = marsRoverMock.moveParaNorte();
        expect(sut.x).toBe(coordenadaMock.x);
    });

});