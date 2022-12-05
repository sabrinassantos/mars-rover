import { MarsRoverEntity } from "../../entities/mars-rover.entity";
import { MarsRover } from "../../entities/marsRover";

export interface ComandoRepository {
    execute(comando: string, marsRover: MarsRoverEntity) : MarsRoverEntity 
}