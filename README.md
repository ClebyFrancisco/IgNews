# IgNews


<img align="right" src="https://github.com/ClebyFrancisco/IgNews/blob/main/public/images/avatar.svg" width="35%" alt="IgNews">

## Tópicos 

[Sobre o IgNews](#dart-sobre)

[Tecnologias](#rocket-tecnologias)

[Configurações necessárias](#configurações-necessárias)

[Instalação e uso](#instalação-e-uso)

[Licença](#licença)

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações

<br>
<br>



## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)


## Configurações necessárias

### **Requisitos**

Necessário realizar as instalações:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli)

Criar conta e configurar os serviços externos:

- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

*Configurações dos serviços estão localizadas no arquivo servicesConfig.md na raiz do projeto.*

## :checkered_flag: instalação e uso ##

```bash
# Clone this project
$ git clone https://github.com/ClebyFrancisco/IgNews.git

# Access
$ cd ignews

# Install dependencies
$ yarn install

# Na raiz do projeto crie uma copia do arquivo .env.example
# Altere o nome da copia para .env.local
# Preencha as variáveis ambiente de acordo com as instruções

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```

```bash
# Execute stripe listen para ouvir eventos do webhook
$ stripe listen --forward-to localhost:3000/api/webhooks
```
