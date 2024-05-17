## Sobre o projeto

O objetivo  é implementar um conjunto de funcionalidades e estilização, colocando em prática os conhecimentos aprendidos.
Iremos acessar a lista de produto desta API e simularemos um carrinho de compras com React.
Além disso, para praticar a estilização  semelhante a um template do Figma. <hr>
<a href ="https://react-entrega-s3-template-hamburgueria-mauricio-abdala.vercel.app/" target="_blank">Link do Projeto</a>

### 1. Estilização
Foi utilizado o SASS para estilizar este projeto.

### 2. Trazendo os produtos da API | Busca
Foi aplicado o useEffect para trazer os produtos da API e um estado adequado para armazenar os produtos  feito um map do mesmo.
Com os produtos vindo da API, o formulário de busca já captura o que o usuário fornece.

### 3. Gerenciamento do carrinho | Modal
De forma muito semelhante ao gerenciamento de transações, foi trabalhado a lógica de adicionar e remover itens do carrinho, bem como imprimir os totais.Os produtos do carrinho virão da própria lista de produtos fornecida pela API.

Nessa etapa, com o gerenciamento funcionando de forma correta, foi utilizado o useEffect para persistir os dados do carrinho no localStorage.

### 4. Modal
Para o modal, um comportamento simples de abertura e fechamento, com condicionais no JSX.

