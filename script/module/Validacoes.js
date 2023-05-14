import FerramentasAux from "./FerramentasAux.js";
import * as math from 'mathjs';

export default class Validacoes {

  validar(elemento) {
    if (elemento != undefined) return true;
    else return false;
  }

  validarBaseOrtogonal(base) {
    const ferramentas = new FerramentasAux();
    if (this.validar(base) == true) {
      let statusOrtogonal = true;
      let pararLoops;

      for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < base.length; j++) {
          if (i != j) {
            if (ferramentas.calcularProdutoInterno(base[i], base[j]) != 0)
              statusOrtogonal = false;
            pararLoops = true;
            break;
          }
        }

        if (pararLoops == true) break;
      }

      return statusOrtogonal;
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }

  validarBaseOrtonormal(base) {
    const ferramentas = new FerramentasAux();
    let statusOrtonormal = true;
    let pararLoops;

    if (this.validar(base) == true) {
      if (this.validarBaseOrtogonal(base) == true) {
        for (let i = 0; i < base.length; i++) {
          for (let j = 0; j < base.length; j++) {
            if (i == j) {
              if (math.round(ferramentas.calcularNormaVetor(base[i], base[j])) != 1) {
                statusOrtonormal = false;
                pararLoops = true;
                break;
              }
            }
          }

          if (pararLoops == true) break;
        }

        return statusOrtonormal;
      } else return false;
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }
}
