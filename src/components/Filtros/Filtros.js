import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 2px solid black;
  margin-top: 50px;
  padding: 10px;
  height: 800px;
`;

export default class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltros>
        <h1>Filtros</h1>
        <br />
        <p>Valor mínimo</p>
        <input
          type="number"
          value={this.props.inputValorMin}
          onChange={this.props.onChangeInputMin}
        />
        <p>Valor máximo</p>
        <input
          type="number"
          value={this.props.inputValorMax}
          onChange={this.props.onChangeInputMax}
        />
        <p>Buscar por nome</p>
        <input
          type="text"
          value={this.props.inputBuscaNome}
          onChange={this.props.onChangeInputBuscaNome}
        />
      </ContainerFiltros>
    );
  }
}
