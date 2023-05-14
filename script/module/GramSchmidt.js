import promptFunction from 'prompt-sync';
import * as math from 'mathjs';
import Validacoes from './Validacoes.js';
import FerramentasAux from './FerramentasAux.js';

export default class GramSchmidt extends FerramentasAux {
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

  calcularBaseOrtonormal(base) {
    if (validarBaseOrtonormal(base) == false) {
      let novaBase = [];
      let i = 0;

      do {
        novaBase.push(this.calcularNormalizacaoVetor(base[i]));
        i++;
      } while (i < base.length);

      return novaBase;

    } else console.log('Base já é ortonormal, não há necessidade de ortogonalizar!');
  }
}