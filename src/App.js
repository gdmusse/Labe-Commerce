import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
/* import {Filtros} from "./components/Filtros/Filtros"; */
import "./App.css";
import styled from "styled-components";


const Commerce = styled.div `
max-width:100vw;
max-height:100vh;
display:grid;
grid-template-columns:1fr 3fr 1fr;

`



import Filtros from "./components/Filtros/Filtros";
import "./App.css";
import styled from "styled-components";

const DivPai = styled.div`
  display: flex;
  margin: 10px;
`;
const listaDeProdutos = [
  {
    codigoProduto: 1,
    nomeProduto: "Produto 1",
    fotoProduto: "https://picsum.photos/200/150?random=1",
    precoProduto: 50,
  },
  {
    codigoProduto: 2, 
    nomeProduto: "Produto 2",
    fotoProduto: "https://picsum.photos/200/150?random=2",
    precoProduto: 150,
  },
  {
    codigoProduto: 3, 
    nomeProduto: "Produto 3",
    fotoProduto: "https://picsum.photos/200/150?random=3",
    precoProduto: 250,
  },
  { codigoProduto: 4, 
    nomeProduto: "Produto 4",
    fotoProduto: "https://picsum.photos/200/150?random=4",
    precoProduto: 30,
  },
  {
    codigoProduto: 5, 
    nomeProduto: "Produto 5",
    fotoProduto: "https://picsum.photos/200/150?random=5",
    precoProduto: 80,
  },
  {
    codigoProduto: 6, 
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
    AdicionarProduto = ()=>{
      produtos.map()
    }
    return (
      <Commerce>
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
        <div>
          <Produtos produtos={this.state.produtos} />
        </div>
        <div>
          <Carrinho/>
        </div>
      </Commerce>
    );
  }
}
