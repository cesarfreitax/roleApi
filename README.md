# Rolé API # 🚀💜✨
____
#### 📝Proposta:
 *Estou trabalhando no desenvolvimento de uma API REST em Node.Js. Escolhi o tema "Rolé", pois é um termo que usamos aqui na cidade do Rio de Janeiro pra se referir a sair pra algum lugar.*
____

<img width="300" src="https://user-images.githubusercontent.com/96268732/179521148-5861c8aa-05c8-43cb-88ed-1aaa8b1e79a4.png">

#### SUA API PERFEITA PARA DAR AQUELE ROLÉ! =)
___
#### 💜Descrição:
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
    "sqlite3": "^5.0.6"
  }
```
#### 🦶Para iniciar esse projeto siga os passos:
- Crie uma pasta no seu computador para armazenar o projeto e entre nela
- Dentro da pasta, clique com o direito do mouse e selecione "Git Bash Here"
- Com o terminal aberto, digite no terminal "git init"
- Depois é só copiar o código abaixo e colar no terminal para fazer o clone desse repositório e instalar as dependências

```
git clone https://github.com/cesarfreitax/roleApi.git && cd ProjetoFinalModulo4 && npm install
```
____
### ⚙️Depêndecias de desenvolvimento:
```js 
"devDependencies": {
    "dotenv": "^16.0.0",
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

Nossa API por enquanto conta com apenas uma entidade e suas próprias rotas:

## 🗒️Lugares:

### 👀Ver todo os lugares pra dar um rolé no banco de dados:
- Método GET 
- No caminho "url da API" + /lugares


### 🔎Buscar apenas um lugar pra dar um rolé do banco por id:
- Método GET 
- No caminho "url da API" + /lugares/:id


### ➕Adicionar novo lugar pra dar um rolé no no banco de dados:
- Método POST 
- No caminho "url da API" + /cardapio 
- Colocar no corpo da requisicao os dados necessários para adicionar um lugar, segue abaixo o modelo de como deve ser feito

``` js:
{
	"nome_do_lugar": "Espaco Hall",
	"bairro": "Barra da Tijuca",
	"descricao": "Casa de festas bem badalada na noite carioca. O local costuma ter shows com cantores famosos nas sextas e aos sábados rola dj"
	"link": "https://espacohall.com.br/"
}
```

com os dados necessários para o seu banco de dados. Os campos para adicionar um novo item são: id_produto, produto e preco (O Produto deve conter mais de 5 letras e o preco deve
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
