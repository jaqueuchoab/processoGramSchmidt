/* Dependencias necessarias:    npm install prompt-sync
                                npm install mathjs
*/

let prompt = require('prompt-sync');
prompt = prompt();
const math = require('mathjs');

function povarBase(espacoVetorial) {
    /*  Usando a dimensao do espaco vetorial como condicao,
    a definicao de base esta sendo perfeitamente implementada
    por ter "n" vetores com "n" coordenadas
    */
   
   let base = [];

    for(let i = 0; i < espacoVetorial; i++) {
        base[i] = [];
        
        for(let j = 0; j < espacoVetorial; j++) {
            base[i][j] = prompt(`Digite o ${j + 1}º elemento do v${i + 1}: `);
        }
    }
    
    return base;
}

function imprimirBase(base) {
    /*  String impressao utilizada para concatenar os elementos
        e evitar a quebra de linha do console.log();
    */

    let impressaoBase = 'B = {';

    for(let i = 0; i < espacoVetorial; i++) {
        for(let j = 0; j < espacoVetorial; j++) {
            
            if(j == 0)
                impressaoBase += `(${base[i][j]},`;

            else if(j != espacoVetorial - 1)
                impressaoBase += `${base[i][j]},`;

            else
                impressaoBase += `${base[i][j]})`;
        } 
        
        if(i != espacoVetorial - 1)
            impressaoBase += ',';
        else
            impressaoBase += '}';
    }

    console.log(impressaoBase)
}

function recuperarVetor(base, indice) {
    /*  Recuperando um unico vetor, deve-se utilizar a ordem
        normal da algebra e nao o indice do vetor
    */

    if(indice > base.length || indice < 1)
        console.log('Erro, índice inexistente no espaço vetorial!');
    else {
        vetor = base[indice - 1];
        return vetor;
    }
}

function imprimirVetor(vetor, apelido) {
    if(vetor == undefined) {
        console.log('Vetor não existe!');
    } else {
        let impressaoVetor = `${apelido} = (`;
        
        for(let i in vetor) {
            
            if(i != vetor.length - 1)
                impressaoVetor += `${vetor[i]},`;
            else
                impressaoVetor += `${vetor[i]})`;
        }

        console.log(impressaoVetor);
    }
}

function calcularProdutoInterno(vetorA, vetorB) {
    if(vetorA == undefined || vetorB == undefined) {
        console.log('Erro, ao menos um vetor não existe!');
    } else {
        let vetorResultante = math.dot(vetorA, vetorB);
        return vetorResultante;
    }
}

function calcularNorma(vetor) {
    if(vetor == undefined)
        console.log('Erro, vetor não existe!');
    else {
        let vetorResultante = math.sqrt(calcularProdutoInterno(vetor, vetor));
        return vetorResultante;
    }
}

let base = [];
let espacoVetorial;

espacoVetorial = prompt('Digite a dimensão do espaço vetorial desejado: ');

base = povarBase(espacoVetorial);
imprimirBase(base);

v1 = recuperarVetor(base, 1);
imprimirVetor(v1, 'v1');

console.log('Norma de v1:', calcularNorma(v1));
