"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coordenada_1 = require("./coordenada");
const direcao_1 = require("./direcao");
const marsRover_1 = require("./marsRover");
const execute = () => {
    const coordenada = new coordenada_1.Coordenada(0, 0);
    const direcao = direcao_1.Direcao.Norte;
    const comando = 'MMRMMLM';
    const comandoArray = Array.from(comando);
    console.log('comandoArray', comandoArray);
    let marsRover = new marsRover_1.MarsRover(coordenada, direcao);
    comandoArray.forEach(c => {
        if (c == 'L' || c == 'R') {
            // marsRover.move(marsRover)
            marsRover = (0, direcao_1.giraParaDireita)(marsRover);
            console.log('marsRover', marsRover);
        }
        else if (c == 'M') {
            marsRover = marsRover.move(marsRover);
        }
    });
    console.log('marsRover', marsRover);
};
execute();
