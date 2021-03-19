import React from "react";
import styled from "styled-components";

const CardCarrinho = styled.div`
  border: 2px solid black;
  width: 350px;
  height: 800px;
  margin: 55px 0;
  padding: 5px;
`;
const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ValorCompra = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const TituloCarrinho = styled.h1`
  text-align: center;
`;
const Title = styled.div`
  text-align: center;
  font-weight: bold;
`;
const Conteudo = styled.div`
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
            <Title> Quantidade </Title>
            <Title> Valor </Title>
            <Title> Produto </Title>
            <Title></Title>
            <Conteudo>{produto.quantidade}</Conteudo>
            <Conteudo>R$ {produto.precoProduto * produto.quantidade}</Conteudo>
            <Conteudo>{produto.nomeProduto}</Conteudo>
            <button onClick={() => this.props.removerProduto(produto)}>
              Remover
            </button>
          </TitleDiv>
        );
      })
    );
  };

  totalCarrinho = () => {
    return this.props.carrinho.reduce((total, produto) => {
      return produto.precoProduto * produto.quantidade + total;
    }, 0);
  };

  render() {
    return (
      <CardCarrinho>
        <TituloCarrinho>Carrinho</TituloCarrinho>
        {this.listaCarrinho()}
        <ValorCompra>
          <h3>Valor Total R$: {this.totalCarrinho()}</h3>
        </ValorCompra>
      </CardCarrinho>
    );
  }
}
