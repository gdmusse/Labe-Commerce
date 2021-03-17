import React from "react";
import styled from "styled-components";
import { CardProdutos } from "./CardProdutos";

const ContainerProdutos = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
`;

export class Produtos extends React.Component {
  render() {
    return (
      <ContainerProdutos>
        {this.props.produtos.map((produto) => {
          return (
            <CardProdutos
              nomeProduto={produto.nomeProduto}
              fotoProduto={produto.fotoProduto}
              precoProduto={produto.precoProduto}
            />
          );
        })}
      </ContainerProdutos>
    );
  }
}
