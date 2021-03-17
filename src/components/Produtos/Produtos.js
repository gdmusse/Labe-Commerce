import React from "react";
import styled from "styled-components";
import { CardProdutos } from "./CardProdutos";

const ContainerProdutos = styled.div`
  display: flex;
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
