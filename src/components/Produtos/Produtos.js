import React from "react";
import styled from "styled-components";
import {CardProdutos} from "./CardProdutos";

const ContainerProdutos = styled.div`
  display: flex;
`;

export class Produtos extends React.Component {
  getListaFiltrada = () => {
    return this.props.produtos
  }
  render() {
    const listaDeProdutos = this.getListaFiltrada()
    return (
      <ContainerProdutos>
        {listaDeProdutos.map((produto) => {
          return <CardProdutos produto={produto} />;
        })}
      </ContainerProdutos>
    );
  }
}
