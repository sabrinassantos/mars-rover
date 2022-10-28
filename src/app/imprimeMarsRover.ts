import { MarsRover } from "../entities/marsRover/marsRover";

const imprimeMarsRover = (marsRover: MarsRover) => {
  const impresso = `${marsRover.coordenada.x}:${marsRover.coordenada.y}:${marsRover.direcao}`;
  return impresso;
}
export default imprimeMarsRover;