import FerramentasAux from './FerramentasAux.js';

export default class GramSchmidt extends FerramentasAux{
  calcularRazaoGramSchmidt(baseV, baseW) {
    wAtual =
      (this.calcularProdutoInterno(baseV, baseW)) /
      (this.calcularProdutoInterno(baseW, baseW));
    wDefinitivo = this.calcularProdutoVetorConstante(baseW, wAtual);
    return wDefinitivo;
  }

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
    if (this.validarBaseOrtonormal(base) == false) {
      let novaBase = [];
      let i = 0;
      console.log(base.length);
  
      do {
        novaBase.push(this.calcularNormalizacaoVetor(base[i]));
        i++;
      } while (i < base.length);
  
      return novaBase;
  
    } else console.log('Base já é ortonormal, não há necessidade de ortogonalizar!');
  }
}