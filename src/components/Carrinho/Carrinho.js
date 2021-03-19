import React from "react";
import styled from "styled-components";
import CarrinhoCompras from "../../images/cart.svg";

const CardCarrinho = styled.div`
  border-top: 1px solid black;
  background-color: #8d3dd9;
  color: white;
  padding: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CarrinhoTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  margin: 20px;
  display: flex;
`;
const CarrinhoButton = styled.div`
  margin-left: 10px;
  width: 70px;
  height: 30px;
  background-color: white;
  border-radius: 10px;
  transition: background-color 400ms;
  padding: 5px;
  color: black;
  &:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const ValorCompra = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const TituloCarrinho = styled.h1`
  text-align: center;
  margin: 0;
`;

const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-right: 5px;
`;

const ConteudoNome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`;

export default class Carrinho extends React.Component {
  listaCarrinho = () => {
    return (
      this.props.carrinho.length > 0 &&
      this.props.carrinho.map((produto) => {
        console.log(produto);
        return (
          <TitleDiv>
            <Conteudo>{produto.quantidade}x</Conteudo>
            <Conteudo>R$ {produto.precoProduto * produto.quantidade}</Conteudo>
            <ConteudoNome>{produto.nomeProduto}</ConteudoNome>
            <CarrinhoButton onClick={() => this.props.removerProduto(produto)}>
              Remover
            </CarrinhoButton>
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
          <img src={CarrinhoCompras} height="43" />
        </CarrinhoTitulo>
        {this.listaCarrinho()}
        <ValorCompra>
          <h3>Valor Total R$: {this.totalCarrinho()}</h3>
        </ValorCompra>
      </CardCarrinho>
    );
  }
}
