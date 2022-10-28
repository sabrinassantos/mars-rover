import { MarsRover } from "../entities/marsRover/marsRover";

const comando = (comando: string, marsRover: MarsRover) => {   
    switch (comando) {
        case 'L':
           marsRover.giraParaEsquerda(marsRover);
           break;
        case 'R':
            marsRover.giraParaDireita(marsRover);
            break;
        case 'M':
            marsRover.move(marsRover);
            break;
        default:
            break;
    }

};
export default comando;