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
    return (
      <ContainerCardProduto>
        <img src={this.props.fotoProduto} alt={"Imagem do produto"} />
        <h3>{this.props.nomeProduto}</h3>
        <p>R${this.props.precoProduto}</p>
        <button onClick={() => this.props.adicionarCarrinho(this.props.id)}>
          Adicionar ao carrinho
        </button>
      </ContainerCardProduto>
    );
  }
}
