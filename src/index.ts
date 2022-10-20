import { Coordenada } from "./coordenada";
import { Direcao } from "./direcao";
import { MarsRover } from "./marsRover";
import { validaComando } from "./validaComando";

const execute = () => {
    const coordenada = new Coordenada(0,0);
    const direcao = Direcao.Norte;
    const input = 'MMR';
    const comandoArray = Array.from(input.toUpperCase());
    let marsRover = new MarsRover(coordenada, direcao)
    if (validaComando(comandoArray)){
        comandoArray.forEach(c => {
            comando(c, marsRover);
        });
      
    }
    console.log('marsRover', marsRover)
}


const comando = (comando: string, marsRover: MarsRover): MarsRover => {   
    switch (comando) {
        case 'L':
           marsRover = marsRover.giraParaEsquerda(marsRover);
           break;
        case 'R':
            marsRover = marsRover.giraParaDireita(marsRover);
            break;
        case 'M':
            marsRover = marsRover.move(marsRover);
            break;
        default:
            break;
    }
    return marsRover;
}


execute();