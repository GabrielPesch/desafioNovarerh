# Processo Seletivo - Teste Técnico- Dev Back End Node js JR - Híbrido | Curitiba 

Este repositório aborda as questões referentes ao desafio técnico proposto pela novareRH para vaga de Dev Backend em Node Jr


## Autor

<a href="https://github.com/GabrielPesch">
        <img src="https://avatars.githubusercontent.com/u/91437516?v=4" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>

  [@Gabriel Pesch](https://github.com/GabrielPesch)
  
---
  
 ## Dependências utilizadas

**Dependencies:** Docker, NodeJs, Express, mysql2, dotenv

**DevDependencies:** Nodemon, chai, chai-as-promised, chai-http, mocha, sinon 
  
 ---
  
<details>
  <summary>Desafio 01</summary>
  <h3> Qual a saída do algoritmo? </h3>
  <p>R: O algoritmo gera uma matriz transposta 50x4 dos primeiros 1000 números primos.
  A cada 200 elementos é impresso uma nova página.</p>
</details>
 
 <details>
   <summary>Desafio 02 </summary>
   <h3>Você julga que este código é limpo? Aponte quais erros o programador
cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug
escondido no código.</h3>
   <p>R: O código não respeitas as regras do CLEAN CODE, tão pouco os princípios do SOLID </p>
     <h4>Principais Erros: </h4>
  <ul>
    <li>A classe e as variáveis não possuem nomes semânticos:</li>
    Escolher nomes com sentido são fundamentais para um código limpo, variáveis declaradas com apenas uma letra tornam o código difícil de ser interpretado em uma eventual manutenção.
    <li>Métodos muito extensos:</li>
    Métodos menores são mais fáceis de compreender e reutilizar.
    <li>Métodos com várias atribuições:</li>
    Cada método deve ter apenas um objetivo, se há acúmulo de funções provavelmente é necessário dividir as atribuições.
    <li>Elevado grau de complexidade cognitiva:</li>
    Existe um uso exagerado de estruturas de repetições. É muito fácil perder o raciocíno quando uma função entra dentro de vários laços de repetição.
</ul>
   </details>

<details>  
  
  <summary>Desafio 03 </summary>
  
<h3>Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.</h3>
  
### Instalação da aplicação para o desafio 03
  

  
  Clone o repositório
  
  ```bash
  git clone git@github.com:GabrielPesch/desafioNovarerh.git
```
 
  Entre na pasta do repositório
  
  ```bash
  cd desafioNovarerh
```
  
Executar o método:

  ```bash
  npm start
```
---
  
## O que foi desenvolvido:
  
- Foram atribuídos valores semânticos às Classes, métodos e variáveis; 
  
- Foi criado uma classe mãe abstrata chamada de Matrix;
  
- O constructor foi utilizado para tornar as dimensões da tabela dinânimca (Agora é possível escolher o tamanho máximo da matriz, quantas colunas ela possui e quantas linhas serão impressas por página);
  
- A classe abstrata possui um método não implementado para que seus herdeiros possam gerar o Array da matriz;
  
- Um método estático para imprimir o Array da matriz;
  
- Foi criada uma class que extende a Matriz, chamada de PrimeNumberMatrix;
  
- Esta classe implementa o método generateMatrixArray, um método que preenche o Array da matriz com números primos;
  
  </details>
  
  <details>  
  
  <summary>Desafio 04 </summary>
    <h3>Faça uma query em SQL que traga em cada linha o nome de jogadores que se
enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi
maior que 30 e a duração do jogo foi maior que 90 minutos.</h3>
  
- Para este desafio realizei a criação de um banco de dados MySQL, e uma rota MSC usando Node.js com para receber os dados da query.
    
- O banco de dados pode ser acessado utilizando o docker

- Foram criados testes unitários e de integração para a rota

- Query utilizada: 
    
  ```javascript   
   SELECT
      CASE WHEN j1.nome < j2.nome then j1.nome else j2.nome END AS jogadorA,
      CASE WHEN j1.nome < j2.nome then j2.nome else j1.nome END AS jogadorB
    FROM
      partidas AS p
    INNER JOIN jogador AS j1 ON j1.id = p.jogador1_id
    INNER JOIN jogador AS j2 ON j2.id = p.jogador2_id
    WHERE
      p.duracao > 90 AND p.pontos_jogador1 + p.pontos_jogador2 > 30
    GROUP BY
      j1.nome, j2.nome
    HAVING 
      (COUNT(jogadorA or jogadorB ) > 1) 
     ```
## Documentação da API

#### Retorna todos os itens

```http
  GET /matches
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `não há` | `não há` |  Um array de partidas. |

#### Retorna o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi
maior que 30 e a duração do jogo foi maior que 90 minutos.
    
    
---
    
## Instalação da aplicação para o desafio 04
    
 Clone o repositório caso não o tenha feito ainda
  

```bash
  git clone git@github.com:GabrielPesch/desafioNovarerh.git
```
          
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

  `MYSQL_HOST`

  `MYSQL_USER`

  `MYSQL_PASSWORD`

  `MYSQL_DATABASE`

  `PORT`

Caso opte por uma configuração padrão basta **renomear** o arquivo `dot.env.example` para `dot.env`
  
---          
 
  Entre na pasta do repositório referente ao backend
  
  ```bash
  cd desafioNovarerh
  cd backend
```
  
Instale as dependências **[Caso existam]**

  ```bash
  npm install
```
Execute a composição dos containers Docker

  ```bash
  docker-compose up -d
```
    
Gere e alimente o banco de dados

  ```bash
  npm run migrations
  npm run seed
```
    
Execute os testes unitários com
    
          
   ```bash
  npm run test
```

          
Execute os testes de integração com: 
   
   
  ```bash
  npm run integration
```
    
Inicie a aplicação node
    
  ```bash
  npm start
```


    
---
  
  </details>
