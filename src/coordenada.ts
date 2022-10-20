export class Coordenada {
    constructor(
        private x: number,
        private y: number
    ){
        this.x = x;
        this.y = y;
    }

    moveParaNorte(coordenada: Coordenada) : Coordenada{       
        coordenada.x = this.x;
        coordenada.y = this.y + 1;
        return coordenada;
    }
    moveParaSul(coordenada: Coordenada) : Coordenada{
        coordenada.x = this.x;
        coordenada.y = this.y - 1;
        return coordenada;
       
    }
    moveParaLeste(coordenada: Coordenada) : Coordenada{
        coordenada.x = this.x + 1;
        coordenada.y = this.y;
        return coordenada;
    }
    moveParaOeste(coordenada: Coordenada): Coordenada{
        coordenada.x = this.x - 1;
        coordenada.y = this.y;
        return coordenada;
    }
    
    
}