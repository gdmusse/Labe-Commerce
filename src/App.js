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
  width: 100vw;
  text-transform: uppercase;
  text-shadow: 2px 2px black;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  justify-content: center;
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
  width: 350px;
`;

const listaDeProdutos = [
  {
    id: 1,
    nomeProduto: "Conjunto Laranja",
    fotoProduto: "https://img.r7.com/images/astronauta-16102019104753764",
    precoProduto: 50,
  },
  {
    id: 2,
    nomeProduto: "Conjunto Branco",
    fotoProduto:
      "https://super.abril.com.br/wp-content/uploads/2018/07/astronauta_abre.jpg?quality=70&strip=info&w=1000",
    precoProduto: 150,
  },
  {
    id: 3,
    nomeProduto: "Conjunto Azul",
    fotoProduto:
      "https://exame.com/wp-content/uploads/2017/01/roupa-espacial-da-bpeing.jpg?quality=70&strip=all",
    precoProduto: 250,
  },
  {
    id: 4,
    nomeProduto: "Buzz Lightyear",
    fotoProduto:
      "https://www.inovacaotecnologica.com.br/noticias/imagens/020130130108-roupa-espacial-z-1-nasa-1.jpg",
    precoProduto: 30,
  },
  {
    id: 5,
    nomeProduto: "Old School",
    fotoProduto:
      "https://mega.ibxk.com.br/2015/03/13/13151037387801.jpg?ims=610x",
    precoProduto: 80,
  },
  {
    id: 6,
    nomeProduto: "Tron",
    fotoProduto:
      "https://imagenes.20minutos.com/files/image_990_v1/uploads/imagenes/2019/06/17/18733.jpg",
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
          <ContainerProdutos>
            <Produtos
              produtos={this.state.produtos}
              inputValorMin={this.state.inputValorMin}
              inputValorMax={this.state.inputValorMax}
              inputBuscaNome={this.state.inputBuscaNome}
              sort={this.state.sort}
              onChangeSort={this.onChangeSort}
              adicionarProduto={this.adicionarProduto}
            />
          </ContainerProdutos>
        </DivBody>
      </Commerce>
    );
  }
}
