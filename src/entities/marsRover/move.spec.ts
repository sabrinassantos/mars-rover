import { Coordenada } from "../coordenada";
import { Direcao } from "../../direcao";
import { MarsRover } from "./marsRover";


describe('Testing Move', () => {
    const coordenadaMock = new Coordenada(0,0);
    it('se direção for Norte deve chamar "moveParaNorte"', () => {
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "moveParaNorte");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });
    it('se direção for Norte não deve chamar "moveParaSul"', () => {
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Norte);
        const spy = jest.spyOn(marsRoverMock, "moveParaSul");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(0);
    });

    it('se direção for Sul deve chamar "moveParaSul"', () => {
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Sul);
        const spy = jest.spyOn(marsRoverMock, "moveParaSul");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });

    it('se direção for Oeste deve chamar "moveParaOeste"', () => {
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Oeste);
        const spy = jest.spyOn(marsRoverMock, "moveParaOeste");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });

    it('se direção for Leste deve chamar "moveParaLeste"', () => {
        const marsRoverMock = new MarsRover(coordenadaMock, Direcao.Leste);
        const spy = jest.spyOn(marsRoverMock, "moveParaLeste");
        marsRoverMock.move(marsRoverMock);

        expect(spy).toBeCalledTimes(1);
    });
});