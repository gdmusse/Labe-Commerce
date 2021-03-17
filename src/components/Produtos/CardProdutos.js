import React from "react";
import styled from "styled-components";

const ContainerCardProduto = styled.div`
  text-align: center;
  border: 2px dotted black;
  height: 300px;
  width: 200px;
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

export class CardProdutos extends React.Component {
  render() {
    const produto = this.props.produto
      return (
        <ContainerCardProduto>
          <img src={produto.fotoProduto} alt={"Imagem do produto"} />
          <h3>{produto.nomeProduto}</h3>
          <p>R${produto.precoProduto}</p>
          <button>Adicionar ao carrinho</button>
        </ContainerCardProduto>
      );
    }
  }
