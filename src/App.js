import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Filtros from "./components/Filtros/Filtros";
import "./App.css";
import styled from "styled-components";

const DivPai = styled.div`
  display: flex;
  margin: 10px;
`;
const listaDeProdutos = [
  {
    nomeProduto: "Produto 1",
    fotoProduto: "https://picsum.photos/200/150?random=1",
    precoProduto: 50,
  },
  {
    nomeProduto: "Produto 2",
    fotoProduto: "https://picsum.photos/200/150?random=2",
    precoProduto: 150,
  },
  {
    nomeProduto: "Produto 3",
    fotoProduto: "https://picsum.photos/200/150?random=3",
    precoProduto: 250,
  },
  {
    nomeProduto: "Produto 4",
    fotoProduto: "https://picsum.photos/200/150?random=4",
    precoProduto: 30,
  },
  {
    nomeProduto: "Produto 5",
    fotoProduto: "https://picsum.photos/200/150?random=5",
    precoProduto: 80,
  },
  {
    nomeProduto: "Produto 6",
    fotoProduto: "https://picsum.photos/200/150?random=6",
    precoProduto: 500,
  },
];

export default class App extends React.Component {
  state = {
    produtos: listaDeProdutos,
    inputValorMin: "",
    inputValorMax: "",
    inputBuscaNome: "",
  };

  handleInputChangeMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  handleInputChangeMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  handleInputChangeBuscaNome = (event) => {
    this.setState({ inputBuscaNome: event.target.value });
  };

  render() {
    return (
      <DivPai>
        <div>
          <Filtros
            inputValorMin={this.state.inputValorMin}
            inputValorMax={this.state.inputValorMax}
            inputBuscaNome={this.state.inputBuscaNome}
            handleInputChangeMin={this.handleInputChangeMin}
            handleInputChangeMax={this.handleInputChangeMax}
            handleInputChangeBuscaNome={this.handleInputChangeBuscaNome}
          />
        </div>
        <div>
          <Produtos
            produtos={this.state.produtos}
            inputValorMin={this.state.inputValorMin}
            inputValorMax={this.state.inputValorMax}
            inputBuscaNome={this.state.inputBuscaNome}
          />
        </div>
      </DivPai>
    );
  }
}
