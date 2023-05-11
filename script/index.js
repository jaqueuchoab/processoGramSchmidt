// Teste da class FerramentasAux
import FerramentasAux from "./module/FerramentasAux.js";

const ferramentas = new FerramentasAux();
const baseEspaco = ferramentas.init();
const base = ferramentas.povoarBase(baseEspaco[1]);
ferramentas.imprimirBase(baseEspaco[0]);
const norma = ferramentas.calcularNormaBase(base);
console.log(norma);