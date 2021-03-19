import React from "react";
import styled from "styled-components";
import CarrinhoCompras from "../../images/cart.svg"

const CardCarrinho = styled.div`
  border-top: 1px solid black;
  background-color: #8d3dd9;
  color:white;
  padding: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
`;

const CarrinhoTitulo = styled.div `
display:flex;
justify-content: center;
align-items: center;

`;

const TitleDiv = styled.div`
  margin:20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ValorCompra = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const TituloCarrinho = styled.h1`
  text-align: center;
  margin: 0;
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
        <CarrinhoTitulo>
        <TituloCarrinho>Carrinho</TituloCarrinho>
        <img src={CarrinhoCompras}height="43" />
        </CarrinhoTitulo>
        {this.listaCarrinho()}
        <ValorCompra>
          <h3>Valor Total R$: {this.totalCarrinho()}</h3>
        </ValorCompra>
      </CardCarrinho>
    );
  }
}
