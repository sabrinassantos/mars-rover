"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordenada = void 0;
class Coordenada {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    moveParaNorte(coordenada) {
        coordenada.x = this.x;
        coordenada.y = this.y + 1;
        return coordenada;
    }
    moveParaSul() {
        return new Coordenada(this.x, this.y - 1);
    }
    moveParaLeste() {
        return new Coordenada(this.x + 1, this.y);
    }
    moveParaOeste() {
        return new Coordenada(this.x - 1, this.y);
    }
}
exports.Coordenada = Coordenada;
