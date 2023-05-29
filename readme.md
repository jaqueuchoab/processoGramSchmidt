
# Processo Gram-Schmidt em JavaScript

O algoritmo desenvolvido neste repositório abstrai o Processo de Gram-Schmidt incluso na disciplina de Álgebra Linear.



## O desafio

Em sala de aula, logo após expor todo o conteúdo referente á Ortogonalização e Ortonormalização de vetores, nosso professor da disciplina propôs um desafio: Desenvolver um algoritmo em qualquer linguagem de programação que seja capaz de verificar e calcular as propriedades descritas em sala.

Vimos nesse desafio uma oportunidade de testar nossos conhecimentos em JavaScript e Node.js, além de trabalhar em equipe com ferramentas que certamente usaremos em um futuro próximo no mercado de trabalho.

Nosso maior desafio foi desenvolver e testar uma representação algébrica coerente com as propriedades passadas em sala num algoritmo simples, com o prazo de um pouco menos de 7 dias. Tivemos que nos comunicar constantemente para nos alinharmos e desenvolver da forma mais rápida possível.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jaqueuchoab/processoGramSchmidt.git
```

Instale as dependências

```bash
  npm install
```

Inicie

```bash
  npm start
```


## Documentação das Classes

No código temos 3 classes fundamentais a serem implementadas, sem elas não é possível calcular os vetores desejados.

#### "FerramentasAux"
Contém métodos necessários para o processo Gram-Schmidt e também têm utilidade para operações individuais ou par-a-par de vetores e constantes.

```http
  import FerramentasAux from "./module/FerramentasAux.js";
  const ferramentas = new FerramentasAux();
```

#### "GramSchmidt"
Os métodos inclusos na classe calculam o processo de Gram-Schmidt através da base passada como argumento.

```http
  import GramSchmidt from "./module/GramSchmidt.js";
  const gramSchmidt = new GramSchmidt();
```

#### "Validacoes"
Engloba as validações necessárias para o método funcionar. Mesmo que não seja necessário instanciá-la é possível usá-la fora á parte através de:

```http
  import Validacoes from "./module/Validacoes.js";
  const validacoes = new Validacoes();
```

## Documentação dos Métodos

### Métodos da classe "FerramentasAux"

init()

    Faz-se necessário inicializar previamente
    uma constante para o espaço vetorial a ser
    usado na execução do algoritmo, então
    usa-se o método init para isso.

    O método não recebe nenhum parâmetro.

    Retorna o espaço vetorial a ser usado nos
    métodos a seguir.

```http
const espacoVetorial = ferramentas.init();
```

povoarBase(espacoVetorial)

    Recebe como parâmetro um número inteiro 
    referente á dimensão do espaço vetorial.

    Retorna uma base povoada com vetores
    alocados conforme a dimensão passada como
    parâmetro (independe de ortogonalidade e
    ortonormalidade), além de receber entradas
    de números para compor os mesmos.

imprimirBase(base)
    
    Recebe como parâmetro a base a ser impressa.
    Não retorna nada, somente imprime a base.

recuperarVetor(base, indice)

    Recebe como parâmetros a base e o índice do vetor a ser
    devolvido (com numeração algébrica normal, isto é, 
    sua contagem inicia no  número 1 invés do número 0).

    Retorna o respectivo vetor.

imprimirVetor(vetor, apelido)

    Recebe como parâmetros o vetor previamente retornado pelo 
    método anterior e uma string como prefixo para exibição. 

    Não retorna nada, apenas imprime o vetor e seu apelido.

calcularProdutoInterno(vetorA, vetorB)

    Recebe como parâmetro dois vetores válidos
    (distintos ou não) com o mesmo número de coordenadas.
    
    Retorna um valor único que se trata da soma
    dos produtos de suas respectivas coordenadas.

calcularNormaVetor(vetor)

    Recebe como parâmetro um vetor válido.

    Retorna sua norma euclidiana.

calcularSubtracaoVetores(vetorA, vetorB)

    Recebe dois vetores válidos como parâmetros.
    
    Retorna um vetor resultante da subtração de 
    suas respectivas coordenadas.

calcularProdutoVetorConstante(vetor, constante)

    Recebe como parâmetros um vetor válido e uma
    constante válida.

    Retorna um vetor resultante do produto de cada
    coordenada do vetor pela constante.

calcularDivisaoVetorConstante(vetor, constante)

    Recebe como parâmetros um vetor válido e uma
    constante válida.

    Retorna um vetor resultante do quociente de cada
    coordenada do vetor pela constante.

calcularNormalizacaoVetor(vetor)

    Recebe um vetor válido como parâmetro.

    Retorna um vetor resultante após o
    processo de Normalização (ou Unitarização).


### Métodos da classe "Validacoes"

validar(elemento)
    
    Recebe como parâmetro objetos fundamentais
    do algoritmo, como vetores e bases.

    Retorna um valor booleano, true para objeto
    válido e false para objeto inválido.

validarBaseOrtogonal(base)

    Recebe como parâmetro uma base previamente
    povoada e válida.

    Retorna um valor booleano, true para base
    já ortogonal e false para base não-ortogonal.

validarBaseOrtonormal(base)

    Recebe como parâmetro uma base previamente
    povoada e válida.

    Retorna um valor booleano, true para base
    já ortonormal e false para base não-ortonormal.

### Métodos da classe "GramSchmidt"

calcularBaseOrtogonal(base)
    
    Recebe como parâmetro uma base previamente
    preenchida e válida.
    
    Retorna sua respectiva base ortogonalizada.

calcularBaseOrtonormal(base)
    
    Recebe como parâmetro uma base previamente
    preenchida, válida e ortogonalizada.
    
    Retorna sua respectiva base ortonormalizada.


## Aprendizados

O desenvolvimento do algoritmo gerou um grande aprendizado tanto
em relação à disciplina de Álgebra Linear, podendo aplicar e realmente
fixar o conteúdo. 

Como também em relação ao próprio curso, nós
conseguimos aplicar conhecimentos de outras disciplinas como Programação Orientada a Objetos
e também exercitar a nossa lógica e trabalho em equipe usando
ferramentas imprescindíveis no mercado de trabalho, como Git e
GitHub, além da linguagem de programação JavaScript.

## Melhorias

Estamos constantemente otimizando e refatorando o repositório e seus arquivos inclusos, buscando bugs e inconsistências na lógica-matemática do processo implementado computacionalmente.

Não conseguimos ainda garantir resultados 100% apurados em dimensões maiores de espaço vetorial, vetores e resultados que envolvem com números racionais e complexos, mas estamos constantemente á procura de melhorias e correções para tal impasse.

## Apresentação
Neste repositório temos também a apresentação utilizada para dissertar sobre o algoritmo em sala de aula para nossos colegas e professor, onde aprofundamentos os fundamentos da ferramenta e fizemos testes em meio á exposição.

## Autores

- [@jaqueuchoab](https://github.com/jaqueuchoab) - Jaqueline Uchôa Brito
- [@1manuelc](https://github.com/1manuelc) - Manuel Carlos Gomes de Sousa

Graduandos de Ciência da Computação pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE) - Campus Tianguá, no 3º período ao inicializar este repositório.

