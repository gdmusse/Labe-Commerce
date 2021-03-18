import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";
import "./App.css";
import styled from "styled-components";


const Commerce = styled.div `
max-width:100vw;
max-height:100vh;
display:grid;
grid-template-columns: 1fr 3fr 1fr;

`;

const DivPai = styled.div`
  display: flex;
  margin: 10px;
`;
const listaDeProdutos = [
  {
    id: 1,
    quantidade: 0,
    nomeProduto: "Produto 1",
    fotoProduto: "https://picsum.photos/200/150?random=1",
    precoProduto: 50,
  },
  {
    id: 2, 
    quantidade: 0,
    nomeProduto: "Produto 2",
    fotoProduto: "https://picsum.photos/200/150?random=2",
    precoProduto: 150,
  },
  {
    id: 3,
    quantidade: 0, 
    nomeProduto: "Produto 3",
    fotoProduto: "https://picsum.photos/200/150?random=3",
    precoProduto: 250,
  },
  { id: 4, 
    quantidade: 0,
    quantidade: 0,
    nomeProduto: "Produto 4",
    fotoProduto: "https://picsum.photos/200/150?random=4",
    precoProduto: 30,
  },
  {
    id: 5, 
    quantidade: 0,
    nomeProduto: "Produto 5",
    fotoProduto: "https://picsum.photos/200/150?random=5",
    precoProduto: 80,
  },
  {
    id: 6, 
    quantidade: 0,
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

  AdicionarProduto = (id)=>{
    const filtrarProduto = this.state.produtos.map((item) => {
      if(item.id === id){
        return true
      }
    })
    const userProdutos = [filtrarProduto,...this.state.carrinho]

    this.setState({carrinho: userProdutos})
  }
  // Tentei mas acabei me perdendo na logica --'
  //adicionarProduto= (id)=> {
  // const pegarProduto = this.state.produtos.forEach((produto) => {
  //   if (id === produto.id && produto.quantidade === 0) {
  //     produto.quantidade = 1
  //     const novoProduto = {
  //       id: produto.id,
  //       quantidade: produto.quantidade,
  //       nome: produto.nomeProduto,
  //       valor: produto.preçoProduto
  //     }
  //     const userProdutos = [...this.state.carrinho, novoProduto]
  //     this.setState({ produtosCarrinho: userProdutos })
  //     return novoProduto
  //   } else if (id === produto.id) {
  //     produto.quantidade += 1
  //     const novaLista = this.state.carrinho.filter((produto) => {
  //       if (produto.id !== id) {
  //         return produto.id
  //       }
  //     })
  //     const meuProduto = {
  //       ...produto,
  //       quantidade: produto.quantidade,
  //       nome: produto.nomeProduto,
  //     }
  //     const novaListaDeProdutos = [...novaLista, meuProduto]
  //     this.setState({ produtosCarrinho: novaListaDeProdutos })
  //     return produto
  //   } else {
  //     return produto
  //   }
  // })
  // }

 


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
      <Commerce >
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
