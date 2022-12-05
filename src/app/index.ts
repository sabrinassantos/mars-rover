import { execute } from "./execute";

const input_ = process.argv[2] || "";
const retorno =  execute(input_);
console.log(retorno);
