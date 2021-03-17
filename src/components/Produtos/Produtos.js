import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
  text-align: center;
  border: 2px dotted black;
  height: 300px;
  width: 200px;
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

const ContainerProdutos = styled.div`
  display: flex;
`;

export default class Produtos extends React.Component {
  state = {
    produtos: [
      {
        nomeProduto: "Produto 1",
        fotoProduto: "https://picsum.photos/200/150?random=1",
        precoProduto: 50,
      },
      {
        nomeProduto: "Produto 2",
        fotoProduto: "https://picsum.photos/200/150?random=2",
        precoProduto: 150,
      },
      {
        nomeProduto: "Produto 3",
        fotoProduto: "https://picsum.photos/200/150?random=3",
        precoProduto: 250,
      },
      {
        nomeProduto: "Produto 4",
        fotoProduto: "https://picsum.photos/200/150?random=4",
        precoProduto: 30,
      },
      {
        nomeProduto: "Produto 5",
        fotoProduto: "https://picsum.photos/200/150?random=5",
        precoProduto: 80,
      },
      {
        nomeProduto: "Produto 6",
        fotoProduto: "https://picsum.photos/200/150?random=6",
        precoProduto: 500,
      },
    ],
  };

  render() {
    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <CardProduto>
          <h3>{produto.nomeProduto}</h3>
          <img src={produto.fotoProduto} alt={"Imagem do produto"} />
          <p>R${produto.precoProduto}</p>
          <button>Adicionar ao carrinho</button>
        </CardProduto>
      );
    });
    return <ContainerProdutos>{listaDeProdutos}</ContainerProdutos>;
  }
}
