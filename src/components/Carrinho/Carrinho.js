import React from "react";
import styled from "styled-components";
import CarrinhoCompras from "../../images/cart.svg"

const CardCarrinho = styled.div`
  border-radius: 20px;
  background-color:purple;
  color:white;
  width:500px;
  padding: 15px;
`;

const CarrinhoTitulo = styled.div `
display:flex;
justify-content: center;
padding:10px;

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
        <img src={CarrinhoCompras}/>
        </CarrinhoTitulo>
        {this.listaCarrinho()}
        <ValorCompra>
          <h3>Valor Total R$: {this.totalCarrinho()}</h3>
        </ValorCompra>
      </CardCarrinho>
    );
  }
}
