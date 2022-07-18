# Rolé API # 🚀💜✨
____
#### 📝Proposta:
 *Estou trabalhando no desenvolvimento de uma API REST em Node.Js. Escolhi o tema "Rolé", pois é um termo que usamos aqui na cidade do Rio de Janeiro pra se referir a sair pra algum lugar.*
____

<img width="300" src="https://user-images.githubusercontent.com/96268732/179521148-5861c8aa-05c8-43cb-88ed-1aaa8b1e79a4.png">

#### SUA API PERFEITA PARA DAR AQUELE ROLÉ! =)
___
#### 🗒️Descrição:
*Estou desenvolvendo uma aplicação pra localizar lugares legais pra dar aquele agito no final de semana! Utilizando essa aplicação é possível: organizar sua lista de lugares como restaurantes, bares, cadastro de clientes, ou seja, o CRUD completo!
____
#### 🪛Ferramentas utilizadas:
• [Express](https://www.npmjs.com/package/express)

• [Sqlite](https://www.sqlite.org/docs.html )

• [Nodejs](https://nodejs.org/en/docs/guides/)

• [Insomnia](https://docs.insomnia.rest/insomnia/send-your-first-request)


____
#### ⚙️Dependências:
```js
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "path": "^0.12.7",
    "sqlite": "^4.1.1",
    "sqlite3": "^5.0.6"
  }
```
Para iniciar este projeto você pode copiar o código abaixo e colar no terminal (Crtl + shift + v), para fazer o clone deste repositório e instalar as dependencias.

```
git clone https://github.com/raphhaelm/ProjetoFinalModulo4.git && cd ProjetoFinalModulo4 && npm install consign && npm install express && npm install all moment && npm install sqlite3 && npm install cors  && npm install path && npm install sqlite
```
____
### ⚙️Depêndecias de desenvolvimento:
```js 
"devDependencies": {
    "dotenv": "^16.0.0",
    "nodemon": "^2.0.16",
    "jest": "^28.0.3"
  }
  ```
____
## Para utilizar a aplicação 
Inicie o terminal e rode com: 
```js
npm start
```

____
# ➡️Rotas:

Nossa API conta com 4 Entidades e cada uma tem sua rota:
- Cardapio
- Clientes 
- Fornecedores
- Pedidos

## 🗒️Cardapio:
Ver todo os itens do cardapio do banco de dados:
Método HTTP Get no caminho "url da api" + /cardapio


### 🔎Buscar produto do cardápio por id:
Método HTTP Get no caminho "url da api" + /cardapio/:id

``` js:
{
	"id_produto": 1,
	"produto": "X-Bacon",
	"preco": 16
}

```

### ➕Adicionar novo produto no cardápio:
Método HTTP Post no caminho "url da api" + /cardapio com os dados necessários para o seu banco de dados. Os campos para adicionar um novo item são: id_produto, produto e preco (O Produto deve conter mais de 5 letras e o preco deve
conter apenas numéros)

``` js:
Sucesso:
{
	"message": "Novo produto cadastrado"
}

Erro:
{
	"erro": "Requisição está fora dos padrões"
}
```
### ↩️Alterar cardápio:

Método HTTP Put no caminho "url da api" + /cardapio/:id passando os valores que deseja alterar especificando seus devidos campos. O preco deve conter apenas números e o pedido deve conter mais de 5 letras.


``` js:
Sucesso: 
{
	"message": "Cardapio alterado com sucesso!"
}
Erro: 
{
	"erro": "Requisição está fora dos padrões"
}

```

### ❌Deletar item no cardápio:
Método HTTP Delete no caminho "url da api" + /cardapio/:id.

Resposta: 
``` js:
{
	"message": "Produto deletado com sucesso"
}
```
___
## 🚹Clientes:
Ver todos os clientes do banco de dados:
Método HTTP Get no caminho "url da api" + /clientes


### 🔎Buscar cliente por id: ###
Método HTTP Get no caminho "url da api" + /clientes/:id



### ➕Adicionar novo cliente: 
Método HTTP Post no caminho "url da api" + /cliente com os dados necessários para o seu banco de dados. Os campos para adicionar um novo cliente são: nome, telefone e email.


### 📝Alterar o cadastro de um cliente: 
Método HTTP Put no caminho "url da api" + /cliente/:id passando os valores que deseja alterar especificando seus devidos campos.


### ❌Deletar um cliente: 
Método HTTP Delete no caminho "url da api" + /cliente/:id.

___
## 🚛Fornecedores

Ver todos os fornecedores do banco de dados:
Método HTTP Get no caminho "url da api" + /fornecedores

### 🔎Buscar fornecedor por id:
Método HTTP Get no caminho "url da api" + /fornecedores/:id


### ➕Adicionar novo fornecedor:
Método HTTP Post no caminho "url da api" + /pedido com os dados necessários para o seu banco de dados. Os campos para adicionar um novo pedido são: id, nome, ramo, cnpj. 


### ❌Deletar um fornecedor:
Método HTTP Delete no caminho "url da api" + /fornecedor/:id.
___
## 📝Pedidos: 
Ver todos os pedidos do banco de dados:
Método HTTP Get no caminho "url da api" + /pedidos


### 🔎Buscar pedido por id: 
Método HTTP Get no caminho "url da api" + /pedido/:id



### ➕Adicionar novo pedido: 
Método HTTP Post no caminho "url da api" + /pedido com os dados necessários para o seu banco de dados. Os campos para adicionar um novo pedido são: nome, produto e preco. O preco deve conter apenas números.
```js 
{
  "nome": "Sr Burgão",
  "produto": "X-Monster",
  "preco": 10
}
```


### ↩️Alterar um pedido no banco de dados: 
Método HTTP Put no caminho "url da api" + /pedido/:id passando os valores que deseja alterar especificando seus devidos campos.
```js 
{
  "nome": "Sr Burgão",
  "produto":"X-Dieta",
  "preco": 10
}
```

### ❌Deletar um pedido: 
Método HTTP Delete no caminho "url da api" + /pedido/:id.

____
#### 🌐Heroku:
Para acessar a aplicação online click aqui: 

[Heroku.](https://apirestdevburger.herokuapp.com/) 
Lembre-se de adicionar a Rota que deseja..
Ex: 
``` js
https://apirestdevburger.herokuapp.com/pedidos 

```
____
### Util:
Existe um arquivo na pasta utils chamado ["Insomnia_2022-05-04"](./src//utils/Insomnia_2022-05-04.json). No seu Insomnia você pode importar esse arquivo, fazendo isso você recebe uma coleção separada por pasta com todas as rotas e os verbos do Crud.
____
#### Versão:
```js 
node: v16.14.2
npm: 8.5.0
