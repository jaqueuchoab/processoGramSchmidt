/* Dependencias necessarias:    npm install prompt-sync
                                npm install mathjs
*/

import promptFunction from 'prompt-sync';
import * as math from 'mathjs';
import Validacoes from './Validacoes.js';

const prompt = promptFunction();

export default class FerramentasAux extends Validacoes{
  povoarBase(espacoVetorial) {
    /*  Usando a dimensao do espaco vetorial como condicao,
    a definicao de base esta sendo perfeitamente implementada
    por ter "n" vetores com "n" coordenadas
    */
    let base = [];
  
    for (let i = 0; i < espacoVetorial; i++) {
      base[i] = [];
      for (let j = 0; j < espacoVetorial; j++)
        base[i][j] = prompt(`Digite o ${j + 1}º elemento do v${i + 1}: `);
    }
  
    return base;
  }
  
  imprimirBase(base) {
    /*  String impressao utilizada para concatenar os elementos
      e evitar a quebra de linha do console.log();
    */
    if (this.validar(base) == true) {
      let impressaoBase = 'B = {';
  
      for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < base.length; j++) {
          if (j == 0)
            impressaoBase += `(${base[i][j]},`;
          else if (j != base.length - 1)
            impressaoBase += `${base[i][j]},`;
          else
            impressaoBase += `${base[i][j]})`;
        }
  
        if (i != base.length - 1)
          impressaoBase += ',';
        else
          impressaoBase += '}';
      }
  
      console.log(impressaoBase);
  
    } else console.log('Erro, base inválida, povoe-a primeiro');
  
  }
  
  recuperarVetor(base, indice) {
    /*  Recuperando um unico vetor, deve-se utilizar a ordem
      normal da algebra e nao o indice do vetor
    */
  
    if (this.validar(base) == true) {
      if (indice > base.length || indice < 1)
        console.log('Erro, índice inexistente no espaço vetorial!');
      else {
        vetor = base[indice - 1];
        return vetor;
      }
    } else console.log('Erro, base inválida, povoe-a primeiro');
  }
  
  imprimirVetor(vetor, apelido) {
    if (this.validar(vetor) == true) {
      let impressaoVetor = `${apelido} = (`;
  
      for (let i in vetor) {
  
        if (i != vetor.length - 1)
          impressaoVetor += `${vetor[i]},`;
        else
          impressaoVetor += `${vetor[i]})`;
      }
  
      console.log(impressaoVetor);
  
    } else console.log('Vetor não existe!');
  }
  
  calcularProdutoInterno(vetorA, vetorB) {
    if (this.validar(vetorA) == true && this.validar(vetorB) == true) {
      let resultado = math.dot(vetorA, vetorB);
      return resultado;
  
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }
  
  calcularNormaVetor(vetor) {
    if (this.validar(vetor) == true) {
      let vetorResultante = math.sqrt(this.calcularProdutoInterno(vetor, vetor));
      return vetorResultante;
  
    } else console.log('Erro, vetor não existe!');
  }
  
  calcularSubtracaoVetores(vetorA, vetorB) {
    let vetorResultante = [];
  
    if (this.validar(vetorA) == true || this.validar(vetorB) == true) {
      for (let i = 0; i < vetorA.length; i++) 
        vetorResultante.push(vetorA[i] - vetorB[i]);
  
      return vetorResultante;
  
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }
  
  calcularProdutoVetorConstante(vetor, constante) {
    let vetorResultante = [];
  
    if (this.validar(vetor) == true) {
      for (let i = 0; i < vetor.length; i++)
        vetorResultante.push(vetor[i] * constante);
  
      return vetorResultante;
  
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }
  
  calcularDivisaoVetorConstante(vetor, constante) {
    let vetorResultante = [];
  
    if (this.validar(vetor) == true) {
      if(constante == 0) {
        vetorResultante = vetor;
      } else {
        for (let i = 0; i < vetor.length; i++) {
          vetorResultante.push(vetor[i] / constante);
        }
      }
      return vetorResultante;
  
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }

  calcularNormalizacaoVetor(vetor) {
    if (this.validar(vetor) == true) {
      let normaVetor = this.calcularNormaVetor(vetor);
      let novoVetor = this.calcularDivisaoVetorConstante(vetor, normaVetor);
      return novoVetor;
  
    } else console.log('Erro, vetor não existe!');
  }

  init() {
    this.espacoVetorial = prompt(
      'Digite a dimensão do espaço vetorial desejado: ',
    );

    return this.espacoVetorial;
  }
}
