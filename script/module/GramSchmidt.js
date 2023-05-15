import FerramentasAux from './FerramentasAux.js';

export default class GramSchmidt extends FerramentasAux{
  calcularRazaoGramSchmidt(baseV, baseW) {
    let wAtual = (this.calcularProdutoInterno(baseV, baseW)) / (this.calcularProdutoInterno(baseW, baseW));
    let wDefinitivo = this.calcularProdutoVetorConstante(baseW, wAtual);
    return wDefinitivo;
  }

  calcularBaseOrtogonal(base) {
    if (this.validarBaseOrtogonal(base) == false) {
      let novaBase = [];
      novaBase.push(base[0]);
      let wAtual, wDefinitivo = [];
      let i = 1;
      while (i < base.length) {
        if (i == 1) {
          wDefinitivo = this.calcularRazaoGramSchmidt(base[i], novaBase[i - 1]);
          wDefinitivo = this.calcularSubtracaoVetores(base[i], wDefinitivo);
          novaBase.push(wDefinitivo);
        } else {
          let k = 0;
          while (k < i) {
            wAtual = this.calcularRazaoGramSchmidt(base[i], novaBase[k]);
            
            if (k == 0) {
              wDefinitivo = wAtual;
              wDefinitivo = this.calcularSubtracaoVetores(base[i], wDefinitivo);
            } else
              wDefinitivo = this.calcularSubtracaoVetores(wDefinitivo, wAtual);
            
            k++;
          }				
          novaBase.push(wDefinitivo);
        }
        i++;
      }
      return novaBase;
    } else
      console.log(
        "Base já é ortogonal, não há necessidade de ortogonalizar!"
      );
  }
  
  calcularBaseOrtonormal(base) {
    if (this.validarBaseOrtonormal(base) == false) {
      let novaBase = [];
      let i = 0;
      do {
        novaBase.push(this.calcularNormalizacaoVetor(base[i]));
        i++;
      } while (i < base.length);
      return novaBase;
    } else
      console.log(
        "Base já é ortonormal, não há necessidade de ortogonalizar!"
      );
  }
}