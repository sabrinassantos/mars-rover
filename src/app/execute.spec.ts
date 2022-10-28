

import { Coordenada } from "../entities/coordenada";
import { execute } from "./execute";



describe('Testing Execute', () => {

    it.each`
    comandoInput    |   esperado
    ${"M"}          |   ${"0:1:N"}
    ${"MMRMMLM"}    |   ${"2:3:N"}
    ${"MMMMMMMMMM "}|   ${"0:0:N"}
    `
    ("deve retornar $esperado se entrada for '$comandoInput'",
    ({ comandoInput, esperado }) => {
        const sut = execute(comandoInput);
        expect(sut).toBe(esperado);
    });

});

