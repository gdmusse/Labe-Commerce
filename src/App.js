import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";

import Robo from "./images/robo.png";
import "./App.css";
import styled from "styled-components";

const Commerce = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 6fr 3fr;
  justify-content: center;
`;
const Header = styled.div`
margin-top: 30px;
background-color: purple;
border-radius: 20px;
color:white;
display: flex;
justify-content: center;
align-items: center;
`;


const ContainerPai = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
`;

const DivContainerFiltros = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
          <img src={Robo}/>
        </Header>
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
        <div>
          <Carrinho 
          carrinho={this.state.carrinho}
          removerProduto={this.removerProduto}
          />
        </div>
      </Commerce>
    );
  }
}
