import React from "react";
import { Produtos } from "./components/Produtos/Produtos";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";
import "./App.css";
import styled from "styled-components";

const Commerce = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const ContainerPai = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
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
  {
    id: 4,
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
    sort: "DECRESCENTE",
  };

/*   AdicionarProduto = (id) => {
    const filtrarProduto = this.state.produtos.map((item) => {
      if (item.id === id) {
        return true;
      }
    });
    const userProdutos = [filtrarProduto, ...this.state.carrinho];

    this.setState({ carrinho: userProdutos });
  };
 */
  /*   adicionarProduto = (id) => {
    const pegarProduto = this.state.produtos.forEach((produto) => {
      if (id === produto.id && produto.quantidade === 0) {
        produto.quantidade = 1;
        const novoProduto = {
          id: produto.id,
          quantidade: produto.quantidade,
          nome: produto.nomeProduto,
          valor: produto.preçoProduto,
        };
        const userProdutos = [...this.state.carrinho, novoProduto];
        this.setState({ produtosCarrinho: userProdutos });
        return novoProduto;
      } else if (id === produto.id) {
        produto.quantidade += 1;
        const novaLista = this.state.carrinho.filter((produto) => {
          if (produto.id !== id) {
            return produto.id;
          }
        });
        const meuProduto = {
          ...produto,
          quantidade: produto.quantidade,
          nome: produto.nomeProduto,
        };
        const novaListaDeProdutos = [...novaLista, meuProduto];
        this.setState({ produtosCarrinho: novaListaDeProdutos });
        return produto;
      } else {
        return produto;
      }
    });
  }; */

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
        <div>
          <Filtros
            inputValorMin={this.state.inputValorMin}
            inputValorMax={this.state.inputValorMax}
            inputBuscaNome={this.state.inputBuscaNome}
            onChangeInputMin={this.onChangeInputMin}
            onChangeInputMax={this.onChangeInputMax}
            onChangeInputBuscaNome={this.onChangeInputBuscaNome}
          />
        </div>
        <ContainerPai>
          <Produtos
            produtos={this.state.produtos}
            inputValorMin={this.state.inputValorMin}
            inputValorMax={this.state.inputValorMax}
            inputBuscaNome={this.state.inputBuscaNome}
            sort={this.state.sort}
            onChangeSort={this.onChangeSort}
          />
        
        </ContainerPai>
        <div>
          <Carrinho />
        </div>
      </Commerce>
    );
  }
}
