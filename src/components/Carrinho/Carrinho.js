import React from "react";
import styled from "styled-components";

const CardCarrinho = styled.div`
  border: 2px solid black;
  width: 250px;
  height: 800px;
  margin: 55px 0;
`;
const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ValorCompra = styled.div`
  display: flex;
  margin-top: 60px;
`;

const TituloCarrinho = styled.h1`
  text-align: center;
`;
export default class Carrinho extends React.Component {
  listaCarrinho = () => {
    return (
      this.props.carrinho.length > 0 &&
      this.props.carrinho.map((produto) => {
        console.log(produto);
        return (
          <TitleDiv>
            <div> Quantidade </div>
            <div> Produto </div>
            <div>Excluir</div>
            <div>{produto.quantidade}</div> <div>{produto.nomeProduto}</div>{" "}
            <button>Remover</button>
          </TitleDiv>
        );
      })
    );
  };
  render() {
    return (
      <CardCarrinho>
        <TituloCarrinho>Carrinho</TituloCarrinho>
        {this.listaCarrinho()}
        <ValorCompra>
          <div>Valor Total: </div>
          <div>00,00</div>
        </ValorCompra>
      </CardCarrinho>
    );
  }
}
