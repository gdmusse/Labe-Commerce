import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8d3dd9;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 250px;
  color: white;
`;

const InputFiltros = styled.input`
  width: 80%;
  text-align: center;
  padding: 0.25em 0.5em;
  border: 1px solid white;
  border-radius: 4px;
`;
const TituloFiltros = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const SubTituloFiltros = styled.div`
  font-size: 15px;
  padding-bottom: 5px;
  padding-top: 5px;
`;

export default class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltros>
        <TituloFiltros>Filtros</TituloFiltros>
        <SubTituloFiltros>Valor mínimo</SubTituloFiltros>
        <InputFiltros
          type="number"
          value={this.props.inputValorMin}
          onChange={this.props.onChangeInputMin}
        />
        <SubTituloFiltros>Valor máximo</SubTituloFiltros>
        <InputFiltros
          type="number"
          value={this.props.inputValorMax}
          onChange={this.props.onChangeInputMax}
        />
        <SubTituloFiltros>Buscar por nome</SubTituloFiltros>
        <InputFiltros
          type="text"
          value={this.props.inputBuscaNome}
          onChange={this.props.onChangeInputBuscaNome}
        />
      </ContainerFiltros>
    );
  }
}
