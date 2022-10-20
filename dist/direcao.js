"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.giraParaDireita = exports.Direcao = void 0;
var Direcao;
(function (Direcao) {
    Direcao["Norte"] = "N";
    Direcao["Leste"] = "E";
    Direcao["Sul"] = "S";
    Direcao["Oeste"] = "W";
})(Direcao = exports.Direcao || (exports.Direcao = {}));
const giraParaDireita = (marsRover) => {
    switch (marsRover.direcao) {
        case Direcao.Norte:
            marsRover.direcao = Direcao.Leste;
            break;
        case Direcao.Leste:
            marsRover.direcao = Direcao.Sul;
            break;
        case Direcao.Sul:
            marsRover.direcao = Direcao.Oeste;
            break;
        case Direcao.Sul:
            marsRover.direcao = Direcao.Sul;
            break;
        default:
            break;
    }
    return marsRover;
};
exports.giraParaDireita = giraParaDireita;
