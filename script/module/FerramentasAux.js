/* Dependencias necessarias:    npm install prompt-sync
                                npm install mathjs
*/

import promptFunction from 'prompt-sync';
import * as math from 'mathjs';

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
    if (this.validar(base) == true) {
      let impressaoBase = 'B = {';

      for (let i = 0; i < this.espacoVetorial; i++) {
        for (let j = 0; j < this.espacoVetorial; j++) {
          if (j == 0) impressaoBase += `(${base[i][j]},`;
          else if (j != this.espacoVetorial - 1) impressaoBase += `${base[i][j]},`;
          else impressaoBase += `${base[i][j]})`;
        }

        if (i != this.espacoVetorial - 1) impressaoBase += ',';
        else impressaoBase += '}';
      }

      console.log(impressaoBase);
    } else console.log('Erro, base inválida, povoe-a primeiro');
  }

  recuperarVetor(base, indice) {
    /*  Recuperando um unico vetor, deve-se utilizar a  ordem normal da algebra e nao o indice do vetor
     */
    if (this.validar(base) == true) {
      if (indice > base.length || indice < 1)
        console.log('Erro, índice inexistente no espaço vetorial!');
      else {
        const vetor = this.base[indice - 1];
        return vetor;
      }
    } else console.log('Erro, base inválida, povoe-a primeiro');
  }

  imprimirVetor(vetor, apelido) {
    if (this.validar(vetor) == true) {
      let impressaoVetor = `${apelido} = (`;

      for (let i in vetor) {
        if (i != vetor.length - 1) impressaoVetor += `${vetor[i]},`;
        else impressaoVetor += `${vetor[i]})`;
      }

      console.log(impressaoVetor);
    } else console.log('Vetor não existe!');
  }

  calcularProdutoInterno(vetorA, vetorB) {
    if (this.validar(vetorA) == true && this.validar(vetorB) == true) {
      let vetorResultante = math.dot(vetorA, vetorB);
      return vetorResultante;
    } else console.log('Erro, ao menos um dos vetores não existe!');
  }

  calcularNormaVetor(vetor) {
    if (this.validar(vetor) == true) {
      let vetorResultante = math.sqrt(this.calcularProdutoInterno(vetor, vetor));
      return vetorResultante;
    } else console.log('Erro, vetor não existe!');
  }

  calcularNormaBase(base) {
    if (this.validar(base) == true) {
      let norma = [];

      for (let i = 1; i <= base.length; i++) {
        norma[i - 1] = this.recuperarVetor(base, i);
        this.imprimirVetor(norma[i - 1], `Vetor[${i}]`);
        norma[i - 1] = this.calcularNormaVetor(norma[i - 1]);
      }

      return norma;
    }
  }

  subtrairVetores(vetorA, vetorB) {
    let vetorResultante = [];

    if (this.validar(vetorA) == true || this.validar(vetorB) == true) {
      for (let i = 0; i < vetorA.length; i++) {
        vetorResultante.push(vetorA[i] - vetorB[i]);
      }

      return vetorResultante;
    } else {
      console.log('Erro, ao menos um dos vetores não existe!');
    }
  }

  produtoVetorConstante(vetor, constante) {
    let vetorResultante = [];

    if (this.validar(vetor) == true) {
      for (let i = 0; i < vetorA.length; i++) {
        vetorResultante.push(vetorA[i] * constante);
      }

      return vetorResultante;
    } else {
      console.log('Erro, ao menos um dos vetores não existe!');
    }
  }

  validar(elemento) {
    if (elemento != undefined) return true;
    else return false;
  }

  validarBaseOrtogonal(base) {
    if (validar(base) == true) {
      let statusOrtogonal = true;
      let pararLoops;

      for (let i = 0; i < base.length; i++) {
        for (let j = 0; j < base.length; j++) {
          if (i != j) {
            if (calcularProdutoInterno(base[i], base[j]) != 0)
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

    if (validar(base) == true) {
      if (validarBaseOrtogonal(base) == true) {
        for (let i = 0; i < base.length; i++) {
          for (let j = 0; j < base.length; j++) {
            if (i == j) {
              if (math.round(calcularNormaVetor(base[i], base[j])) != 1) {
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

  calcularBaseOrtogonal(base) {
    if (validarBaseOrtogonal(base) == false) {
      let novaBase = base[0];
      let wAtual;
      let wDefinitivo;

      for (let i = 1; i < base.length; i++) {
        for (let j = 1; j < base.length; j++) {
          if (j == 1)
            wAtual = subtrairVetores(
              base[i],
              math.dot(
                calcularProdutoInterno(base[i], novaBase[i - 1]) /
                  calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]),
                novaBase[i - 1],
              ),
            );
          else
            wAtual = subtrairVetores(
              wAtual,
              math.dot(
                calcularProdutoInterno(base[i], novaBase[i - 1]) /
                  calcularProdutoInterno(novaBase[i - 1], novaBase[i - 1]),
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

  init() {
    this.base = [];
    this.espacoVetorial = prompt(
      'Digite a dimensão do espaço vetorial desejado: ',
    );

    return [this.base, this.espacoVetorial];
  }
}
