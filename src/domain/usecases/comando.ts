import { MoveCoordenada } from "./move-coordenada";
import { MoveDirecao } from "./move-direcao";
import { MarsRover } from "../../entities/marsRover";
import { ComandoRepository } from "../repositories/comando.repository";
import { MarsRoverEntity } from "../../entities/mars-rover.entity";


const comando = (comando: string, marsRover: MarsRoverEntity) => { 
    
    const moveDirecao = new MoveDirecao(marsRover.direcao);
    const moveCoordenada = new MoveCoordenada();
    switch (comando) {
        case 'L':
            marsRover.direcao = moveDirecao.giraParaEsquerda(marsRover.direcao);
           break;
        case 'R':
            marsRover.direcao = moveDirecao.giraParaDireita(marsRover.direcao);
            break;
        case 'M':
            marsRover.coordenada = moveCoordenada.move(marsRover.direcao, marsRover.coordenada);
            break;
        default:
            break;
    }

};
export default comando;
// export class Comando implements ComandoRepository {

//     constructor( 
//         private moveDirecao: MoveDirecao,
//         private moveCoordenada: MoveCoordenada,
//         ){}

//     execute = (comando: string, marsRover: MarsRover) : MarsRover => {   
//         switch (comando) {
//             case 'L':
//                 marsRover.direcao = this.moveDirecao.giraParaEsquerda(marsRover.direcao);
//                break;
//             case 'R':
//                 marsRover.direcao = this.moveDirecao.giraParaDireita(marsRover.direcao);
//                 break;
//             case 'M':
//                 marsRover.coordenada = this.moveCoordenada.move(marsRover.direcao, marsRover.coordenada);
//                 break;
//             default:
//                 break;
//         }
//         return marsRover;
    
//     };
// }

