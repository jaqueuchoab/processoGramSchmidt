// Teste da class FerramentasAux
import FerramentasAux from "./module/FerramentasAux.js";
import GramSchmidt from "./module/GramSchmidt.js";

const ferramentas = new FerramentasAux();
const gramSchmidt = new GramSchmidt();
const baseEspaco = ferramentas.init();
const espacoVetorial = baseEspaco[1];
const base = ferramentas.povoarBase(espacoVetorial);
ferramentas.imprimirBase(base, espacoVetorial);
const baseOrtogonal = gramSchmidt.calcularBaseOrtogonal(base);
const baseOrtornomal = gramSchmidt.calcularBaseOrtonormal(baseOrtogonal);
