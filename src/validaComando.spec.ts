import { validaComando } from "./validaComando";

describe('Testing ValidaComando', () => {
    it('should true where comand not include character different "R", "L" or"M"', () => {
        const comand = Array.from('MLRR');
        const result = validaComando(comand);
        expect(result).toBe(true);
    });
    it('should false where comand  include character different "R", "L" or"M"', () => {
        const comand = Array.from('MARR');
        const result = validaComando(comand);
        expect(result).toBe(false);
    });
});