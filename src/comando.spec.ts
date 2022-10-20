
import execute from ".";
import comando from ".";
import { Coordenada } from "./coordenada";
import { Direcao, giraParaDireita, giraParaEsquerda } from "./direcao";
import { MarsRover } from "./marsRover";



describe('Testing Comando', () => {
    const coordenada = new Coordenada(0,0);
    const marsRoverMock = new MarsRover(coordenada, Direcao.Norte) ;
       
    it('se Comando igual "R"', () => {
        execute.comando = jest.fn();
        expect(giraParaDireita).toBeCalled() 
    });
});