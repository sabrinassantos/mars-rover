import { MarsRoverEntity } from "../entities/mars-rover.entity";
import { MarsRover } from "../entities/marsRover";

const imprimeMarsRover = (marsRover: MarsRoverEntity) => {
  const impresso = `${marsRover.coordenada.x}:${marsRover.coordenada.y}:${marsRover.direcao}`;
  return impresso;
}
export default imprimeMarsRover;