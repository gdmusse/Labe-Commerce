import React from "react";
import styled from "styled-components";
import { CardProdutos } from "./CardProdutos";

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContainerPai = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  width: 50vw;
`;
const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export class Produtos extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

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
      })
      .sort((a, b) => {
        if (this.state.sort === "CRESCENTE") {
         return (a.precoProduto - b.precoProduto);
        } else {
         return (b.precoProduto - a.precoProduto);
        }
      });
  };
  
  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    let listaFiltrada = this.FiltrarLista();
    return (
      <ContainerPai>
        <ContainerHeader>
          <p>Quantidade de produtos: {listaFiltrada.length}</p>
          <p>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </p>
        </ContainerHeader>
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
      </ContainerPai>
    );
  }
}
