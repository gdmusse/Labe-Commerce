import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";

import Robo from "./images/robo.png";
import "./App.css";
import styled from "styled-components";

const Commerce = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://i.imgur.com/F9KDSc6.jpg");
  background-repeat: repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow-x: scroll;
`;

const Header = styled.div`
  background-color: purple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  text-transform: uppercase;
  text-shadow: 2px 2px black;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const ContainerPai = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
`;

const MeuCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  flex-grow: 1;
`;
const DivContainerFiltros = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const DivBody = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
const DivBodyEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
`;

const listaDeProdutos = [
  {
    id: 1,
    nomeProduto: "Produto 1",
    fotoProduto: "https://picsum.photos/200/150?random=1",
    precoProduto: 50,
  },
  {
    id: 2,
    nomeProduto: "Produto 2",
    fotoProduto: "https://picsum.photos/200/150?random=2",
    precoProduto: 150,
  },
  {
    id: 3,
    nomeProduto: "Produto 3",
    fotoProduto: "https://picsum.photos/200/150?random=3",
    precoProduto: 250,
  },
  {
    id: 4,
    nomeProduto: "Produto 4",
    fotoProduto: "https://picsum.photos/200/150?random=4",
    precoProduto: 30,
  },
  {
    id: 5,
    nomeProduto: "Produto 5",
    fotoProduto: "https://picsum.photos/200/150?random=5",
    precoProduto: 80,
  },
  {
    id: 6,
    nomeProduto: "Produto 6",
    fotoProduto: "https://picsum.photos/200/150?random=6",
    precoProduto: 500,
  },
];

export default class App extends React.Component {
  state = {
    produtos: listaDeProdutos,
    carrinho: [],
    inputValorMin: "",
    inputValorMax: "",
    inputBuscaNome: "",
    sort: "DECRESCENTE",
  };

  adicionarProduto = (produto) => {
    const indiceProduto = this.state.carrinho.findIndex((item) => {
      return item.id === produto.id;
    });
    const novoCarrinho = [...this.state.carrinho];
    if (indiceProduto >= 0) {
      novoCarrinho[indiceProduto].quantidade++;
    } else {
      const novoProduto = { ...produto, quantidade: 1 };
      novoCarrinho.push(novoProduto);
    }
    this.setState({ carrinho: novoCarrinho });
  };

  removerProduto = (produto) => {
    const indiceProduto = this.state.carrinho.findIndex((item) => {
      return item.id === produto.id;
    });

    const novoCarrinho = [...this.state.carrinho];

    if (this.state.carrinho[indiceProduto].quantidade === 1) {
      novoCarrinho.splice(indiceProduto, 1);
    } else {
      novoCarrinho[indiceProduto].quantidade--;
    }

    this.setState({ carrinho: novoCarrinho });
  };

  onChangeInputMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  onChangeInputMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  onChangeInputBuscaNome = (event) => {
    this.setState({ inputBuscaNome: event.target.value });
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    return (
      <Commerce>
        <Header>
          <h1>Minha lojinha Espacial!</h1>
          <img src={Robo} width="150" height="100" />
        </Header>
        <DivBody>
          <DivBodyEsquerda>
            <DivContainerFiltros>
              <Filtros
                inputValorMin={this.state.inputValorMin}
                inputValorMax={this.state.inputValorMax}
                inputBuscaNome={this.state.inputBuscaNome}
                onChangeInputMin={this.onChangeInputMin}
                onChangeInputMax={this.onChangeInputMax}
                onChangeInputBuscaNome={this.onChangeInputBuscaNome}
              />
            </DivContainerFiltros>
            <MeuCarrinho>
              <Carrinho
                carrinho={this.state.carrinho}
                removerProduto={this.removerProduto}
              />
            </MeuCarrinho>
          </DivBodyEsquerda>
          <ContainerPai>
            <Produtos
              produtos={this.state.produtos}
              inputValorMin={this.state.inputValorMin}
              inputValorMax={this.state.inputValorMax}
              inputBuscaNome={this.state.inputBuscaNome}
              sort={this.state.sort}
              onChangeSort={this.onChangeSort}
              adicionarProduto={this.adicionarProduto}
            />
          </ContainerPai>
        </DivBody>
      </Commerce>
    );
  }
}
