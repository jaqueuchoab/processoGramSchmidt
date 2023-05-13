import promptFunction from 'prompt-sync';
import * as math from 'mathjs';
import Validacoes from './Validacoes.js';
import FerramentasAux from './FerramentasAux.js';

export default class GramSchmidt extends FerramentasAux{
  calcularBaseOrtogonal(base) {
    if (this.validarBaseOrtogonal(base) == false) {
      let novaBase = [];
      novaBase.push(base[0]);
  
      let wAtual;
      let i = 1;
      while (i < base.length) {
        wAtual = this.calcularProdutoInterno(base[i], novaBase[i - 1]);
        wAtual = wAtual / (this.calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]));
        wAtual = this.calcularProdutoVetorConstante(novaBase[i - 1], wAtual);
        wAtual = this.calcularSubtracaoVetores(base[i], wAtual);
  
        novaBase.push(wAtual);
        i++;
      }
  
      return novaBase;
  
    } else console.log('Base já é ortogonal, não há necessidade de ortogonalizar!');
  }
  
  calcularBaseOrtogonal(base) {
    if (this.validarBaseOrtogonal(base) == false) {
      console.log('entrou na class GramSchmidt eeeeee');
      let novaBase = base[0];
      let wAtual;
      let wDefinitivo;

      for (let i = 1; i < base.length; i++) {
        for (let j = 1; j < base.length; j++) {
          if (j == 1)
            wAtual = this.subtrairVetores(
              base[i],
              math.dot(
                this.calcularProdutoInterno(base[i], novaBase[i - 1]) /
                  this.calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]),
                novaBase[i - 1],
              ),
            );
          else
            wAtual = subtrairVetores(
              wAtual,
              math.dot(
                this.calcularProdutoInterno(base[i], novaBase[i - 1]) /
                  this.calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]),
                novaBase[i - 1],
              ),
            );
        }

        novaBase.push(wAtual);
      }

      return novaBase;
    } else {
      console.log('Base já é ortogonal, não há necessidade de ortogonalizar!');
    }
  }
}