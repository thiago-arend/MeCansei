# Me Cansei: O seu app para se livrar dos cacarecos

## Sobre

MeCansei é um aplicativo que você usa para vender cacarecos que não fazem mais sentido na sua casa.
Você pode vender itens em três categorias diferentes: CD, DVD ou livro.

## Tecnologias utilizadas

* React.js
* JavaScript
* ReactRouterDOM
* Axios
* Joi


## Rodando localmente

1. Instale o Docker em sua máquina

#

2. No terminal, rode o seguinte comenda para trazer a imagem da aplicação para a sua máquina

```bash
  docker pull thiagoarend/mecansei
```

#

3. Execute a imagem para gerar um container da aplicação que estará executando na porta 8080

```bash
  docker run -d -p 8080:80 mecansei
```

#

4. No seu navegador, acesse localhost:8080 para ver a aplicação rodando localmente
