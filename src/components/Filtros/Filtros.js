import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
`;

onChangeInput = (event) => {
  this.setState({ inputValorMinimo: event.target.value });
};

export default class Filtros extends React.Component {
  render() {

    function FiltroValorMinimo(props) {
    const listaFiltrada = props.lista.filter((produto) => {
      if(produto.precoProduto >= inputValorMinimo){

      }
    }
    )
    }
    console.log (listaFiltrada)
    function FiltroValorMaximo(props) {
    
    }

    return (
      <ContainerFiltros>
        <p>Valor mínimo</p>
        <input value={this.state.inputValorMinimo} onChange={this.onChangeInput} />
        <p>Valor máximo</p>
        <input value={this.state.inputValorMaximo} onChange={this.onChangeInput} />
      </ContainerFiltros>
    )
}
}
