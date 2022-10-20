"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarsRover = void 0;
const direcao_1 = require("./direcao");
class MarsRover {
    constructor(coordenanda, direcao) {
        this.coordenanda = coordenanda;
        this.direcao = direcao;
        this.move = (marsRover) => {
            switch (marsRover.direcao) {
                case direcao_1.Direcao.Norte:
                    marsRover.coordenanda = this.coordenanda.moveParaNorte(this.coordenanda);
                    break;
                case direcao_1.Direcao.Sul:
                //     marsRover.coordenanda = this.coordenanda.moveParaSul(this.coordenanda);
                //     break;
                // case Direcao.Norte:
                //     marsRover.coordenanda = this.coordenanda.moveParaNorte(this.coordenanda);
                //     break;
                default:
                    break;
            }
            return marsRover;
        };
    }
}
exports.MarsRover = MarsRover;
