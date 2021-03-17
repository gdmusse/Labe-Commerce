import React from "react";
import styled from "styled-components";
import { CardProdutos } from "./CardProdutos";

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class Produtos extends React.Component {
  FiltrarLista = () => {
    return this.props.produtos
      .filter((produto) => {
        if (
          this.props.inputValorMin === "" ||
          this.props.inputValorMin <= produto.precoProduto
        ) {
          return true;
        }
      })
      .filter((produto) => {
        if (
          this.props.inputValorMax === "" ||
          this.props.inputValorMax >= produto.precoProduto
        ) {
          return true;
        }
      })
      .filter((produto) => {
        if (produto.nomeProduto.includes(this.props.inputBuscaNome)) {
          return true;
        }
      });
  };

  render() {
    let listaFiltrada = this.FiltrarLista();
    return (
      <ContainerProdutos>
        {listaFiltrada.map((produto) => {
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
