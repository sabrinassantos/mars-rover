import { execute } from "./execute";

const input_ = process.argv || "";

const retorno =  execute(input_[2]);
console.log(retorno);
