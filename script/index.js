// Teste da class FerramentasAux
import FerramentasAux from "./module/FerramentasAux.js";
import GramSchmidt from "./module/GramSchmidt.js";

const ferramentas = new FerramentasAux();

const gramSchmidt = new GramSchmidt();
const espacoVetorial = ferramentas.init();
const base = ferramentas.povoarBase(espacoVetorial);

ferramentas.imprimirBase(base, espacoVetorial);

const baseOrtogonal = gramSchmidt.calcularBaseOrtogonal(base);
console.log('\nBase Ortogonal: ');
console.log(baseOrtogonal, '\n');

const baseOrtonormal = gramSchmidt.calcularBaseOrtonormal(baseOrtogonal);
console.log('\nBase Ortonormal: ');
console.log(baseOrtonormal, '\n');
