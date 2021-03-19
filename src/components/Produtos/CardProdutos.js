import React from "react";
import styled from "styled-components";

const ContainerCardProduto = styled.div`
  text-align: center;
  border: 2px dotted white;
  border-radius: 5px;
  height: 260px;
  width: 200px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  background-color: #4e2278;
  color: white;
`;
const TituloProduto = styled.div`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const FotoProduto = styled.img`
  height: 150px;
  width: 200px;
`;
export class CardProdutos extends React.Component {
  render() {
    return (
      <ContainerCardProduto>
        <FotoProduto src={this.props.fotoProduto} alt={"Imagem do produto"} />
        <TituloProduto>{this.props.nomeProduto}</TituloProduto>
        <p>R${this.props.precoProduto}</p>
        <button onClick={() => this.props.adicionarProduto(this.props.produto)}>
          Adicionar ao carrinho
        </button>
      </ContainerCardProduto>
    );
  }
}
