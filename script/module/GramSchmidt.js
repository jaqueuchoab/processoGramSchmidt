import FerramentasAux from './FerramentasAux.js';

export default class GramSchmidt extends FerramentasAux{
  calcularBaseOrtogonal(base) {
    if (this.validarBaseOrtogonal(base) == false) {
      let novaBase = [];
      // Push no primeiro vetor definindo assim o W1;
      novaBase.push(base[0]);
  
      let wAtual = 0;
      let wAtualSecundario = 0;
      let i = 1;
      while (i < base.length) {
        if(i == 2) {
          wAtual = this.calcularProdutoInterno(base[i], novaBase[i - 2]);
          console.log(wAtual);
          wAtual = wAtual / (this.calcularProdutoInterno(novaBase[i - 2], novaBase[i - 2]));
          console.log(this.calcularProdutoInterno(novaBase[i - 2], novaBase[i - 2]));
          wAtual = this.calcularProdutoVetorConstante(novaBase[i - 2], wAtual);
          wAtualSecundario = this.calcularProdutoInterno(base[i - 1], novaBase[i - 1]);
          wAtualSecundario = wAtualSecundario / (this.calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]));
          wAtualSecundario = this.calcularProdutoVetorConstante(novaBase[i - 1], wAtualSecundario);
          wAtual = this.calcularSubtracaoVetores(base[i], wAtual);
          wAtual = this.calcularSubtracaoVetores(wAtual, wAtualSecundario);
          novaBase.push(wAtual);
        } else {
          wAtual = this.calcularProdutoInterno(base[i], novaBase[i - 1]);
          wAtual = wAtual / (this.calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]));
          wAtual = this.calcularProdutoVetorConstante(novaBase[i - 1], wAtual);
          wAtual = this.calcularSubtracaoVetores(base[i], wAtual);
          novaBase.push(wAtual);
        }
        i++;
      }
      
      console.log('Base Ortogonal: \n', novaBase);
      return novaBase;
  
    } else console.log('Base já é ortogonal, não há necessidade de ortogonalizar!');
  }

  calcularBaseOrtonormal(base) {
    if (this.validarBaseOrtonormal(base) == false) {
      let novaBase = [];
      let i = 0;

      do {
        novaBase.push(this.calcularNormalizacaoVetor(base[i]));
        i++;
      } while (i < base.length);
  
      console.log('Base Ortonormal: \n', novaBase);
      return novaBase;
  
    } else console.log('Base já é ortonormal, não há necessidade de ortogonalizar!');
  }
}