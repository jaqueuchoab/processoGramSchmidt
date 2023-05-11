/* Dependencias necessarias:    npm install prompt-sync
                                npm install mathjs
*/

import promptFunction from 'prompt-sync';
import *as math from 'mathjs';

const prompt = promptFunction();

export default class FerramentasAux {
  constructor() {
    this.base;
    this.espacoVetorial;
  }

  povoarBase(espacoVetorial) {
    /*  Usando a dimensao do espaco vetorial como condicao,
    a definicao de base esta sendo perfeitamente implementada
    por ter "n" vetores com "n" coordenadas
    */

    for (let i = 0; i < this.espacoVetorial; i++) {
      this.base[i] = [];

      for (let j = 0; j < this.espacoVetorial; j++) {
        this.base[i][j] = prompt(`Digite o ${j + 1}º elemento do v${i + 1}: `);
      }
    }

    return this.base;
  }

  imprimirBase(base) {
    /*  String impressao utilizada para concatenar os elementos
        e evitar a quebra de linha do console.log();
    */

    let impressaoBase = 'B = {';

    for (let i = 0; i < this.espacoVetorial; i++) {
      for (let j = 0; j < this.espacoVetorial; j++) {
        if (j == 0) impressaoBase += `(${this.base[i][j]},`;
        else if (j != this.espacoVetorial - 1) impressaoBase += `${this.base[i][j]},`;
        else impressaoBase += `${this.base[i][j]})`;
      }

      if (i != this.espacoVetorial - 1) impressaoBase += ',';
      else impressaoBase += '}';
    }

    console.log(impressaoBase);
  }

  recuperarVetor(base, indice) {
    /*  Recuperando um unico vetor, deve-se utilizar a  ordem normal da algebra e nao o indice do vetor
    */

    if (indice > this.base.length || indice < 1)
      console.log('Erro, índice inexistente no espaço vetorial!');
    else {
      const vetor = this.base[indice - 1];
      return vetor;
    }
  }

  imprimirVetor(vetor, apelido) {
    if (vetor == undefined) {
      console.log('Vetor não existe!');
    } else {
      let impressaoVetor = `${apelido} = (`;

      for (let i in vetor) {
        if (i != vetor.length - 1) impressaoVetor += `${vetor[i]},`;
        else impressaoVetor += `${vetor[i]})`;
      }

      console.log(impressaoVetor);
    }
  }

  calcularProdutoInterno(vetorA, vetorB) {
    if (vetorA == undefined || vetorB == undefined) {
      console.log('Erro, ao menos um vetor não existe!');
    } else {
      let vetorResultante = math.dot(vetorA, vetorB);
      return vetorResultante;
    }
  }

  calcularNormaVetor(vetor) {
    if (vetor == undefined) console.log('Erro, vetor não existe!');
    else {
      let vetorResultante = math.sqrt(this.calcularProdutoInterno(vetor, vetor));
      return vetorResultante;
    }
  }

  calcularNormaBase(base) {
    let norma = [];

    for(let i = 1; i <= base.length; i++) {
      norma[i-1] = this.recuperarVetor(base, i);
      this.imprimirVetor(norma[i-1], `Vetor[${i}]`);
      norma[i-1] = this.calcularNormaVetor(norma[i-1]);
    }
    
    return norma;
  }

  init() {
    this.base = [];
    this.espacoVetorial = prompt('Digite a dimensão do espaço vetorial desejado: ');

    return [this.base, this.espacoVetorial];
  }
}
