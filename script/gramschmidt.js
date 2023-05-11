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
    if(validacao(base)) {
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

        console.log(impressaoBase);

    } else
        console.log('Erro, base inválida, povoe-a primeiro');

}

function recuperarVetor(base, indice) {
    /*  Recuperando um unico vetor, deve-se utilizar a ordem
        normal da algebra e nao o indice do vetor
    */

    if(validacao(base)) {
        if(indice > base.length || indice < 1)
            console.log('Erro, índice inexistente no espaço vetorial!');
        else {
            vetor = base[indice - 1];
            return vetor;
        }
    } else
        console.log('Erro, base inválida, povoe-a primeiro');
}

function imprimirVetor(vetor, apelido) {
    if(validacao(vetor)) {
        let impressaoVetor = `${apelido} = (`;
        
        for(let i in vetor) {
            
            if(i != vetor.length - 1)
                impressaoVetor += `${vetor[i]},`;
            else
                impressaoVetor += `${vetor[i]})`;
        }

        console.log(impressaoVetor);
        
    } else
        console.log('Vetor não existe!');
}

function calcularProdutoInterno(vetorA, vetorB) {
    if(validacao(vetorA) && validacao(vetorB)) {
        let vetorResultante = math.dot(vetorA, vetorB);
        return vetorResultante;
        
    } else
        console.log('Erro, ao menos um dos vetores não existe!');
}

function calcularNorma(vetor) {
    if(validacao(vetor)) {
        let vetorResultante = math.sqrt(calcularProdutoInterno(vetor, vetor));
        return vetorResultante;

    } else
        console.log('Erro, vetor não existe!');
}

function validacao(elemento) {
    if(elemento != undefined)
        return true;
    else
        return false;
}

function validarOrtogonais(base) {
    if(validacao(base)) {
        let statusOrtogonal = true;
        let pararLoops;

        for(let i = 0; i < base.length; i++) {
            for(let j = 0; j < base.length; j++) {
                
                if(i != j) {
                    if(math.round(calcularProdutoInterno(base[i], base[j])) != 0)
                        statusOrtogonal = false;
                        pararLoops = true;
                        break;
                }
            }

            if(pararLoops == true)
                break;
        }
    
        return statusOrtogonal;

    } else
        console.log('Erro, ao menos um dos vetores não existe!');
}

function validarOrtonormais(base) {
    let statusOrtonormal = true;
    let pararLoops;
    
    if(validacao(base)) {
        if(validarOrtogonais == true) {

            for(let i = 0; i < base.length; i++) {
                for(let j = 0; j < base.length; j++) {

                    if(i == j) {
                        if(math.round(calcularNorma(base[i], base[j])) != 1) {
                            statusOrtonormal = false;
                            pararLoops = true;
                            break;
                        }
                    }         
                }

                if(pararLoops == true)
                    break;
            }

            return statusOrtonormal;

        } else {
            console.log('Base não ortogonal, logo, não pode ser ortonormal');
            return false;
        }

    } else
        console.log('Erro, ao menos um dos vetores não existe!');
}

let base = [];
let espacoVetorial;

espacoVetorial = prompt('Digite a dimensão do espaço vetorial desejado: ');

base = povarBase(espacoVetorial);
imprimirBase(base);

v1 = recuperarVetor(base, 1);
imprimirVetor(v1, 'v1');

v2 = recuperarVetor(base, 2);
imprimirVetor(v2, 'v2');

console.log('Norma de v1:', calcularNorma(v1));
console.log('É ortogonal?', validarOrtogonais(base));
console.log('É ortonormal?', validarOrtonormais(base));
