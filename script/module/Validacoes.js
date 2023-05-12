import FerramentasAux from "./FerramentasAux.js";

export default class Validacoes {
  validar(elemento) {
    if (elemento != undefined) return true;
    else return false;
  }

  validarBaseOrtogonal(base) {
    if (this.validar(base) == true) {
      let statusOrtogonal = true;
      let pararLoops;

      for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < base.length; j++) {
          if (i != j) {
            if (this.calcularProdutoInterno(base[i], base[j]) != 0)
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
    let statusOrtonormal = true;
    let pararLoops;

    if (this.validar(base) == true) {
      if (this.validarBaseOrtogonal(base) == true) {
        for (let i = 0; i < base.length; i++) {
          for (let j = 0; j < base.length; j++) {
            if (i == j) {
              if (math.round(this.calcularNormaVetor(base[i], base[j])) != 1) {
                statusOrtonormal = false;
                pararLoops = true;
                break;
              }
            }
          }

          if (pararLoops == true) break;
        }

        return statusOrtonormal;
      } else {
        console.log('Base não ortogonal, logo, não pode ser ortonormal');
        return false;
      }
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }
}