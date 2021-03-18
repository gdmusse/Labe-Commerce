import React from "react";
import styled from "styled-components";


const CardCarrinho = styled.div `
border: 2px solid black;
width: 200px;
height:800px;
margin:55px 0 ;

`;
const TitleDiv = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr ;

`;

const ValorCompra = styled.div`
display:flex;
margin-top:60px;
`;

const TituloCarrinho = styled.h1`
text-align:center;
`;
export default class Carrinho extends React.Component{

render(){
    return(
        <CardCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
            <TitleDiv>
                <div> Quantidade </div> 
                <div> Produto </div>
                <div>Excluir</div>
                <div>{this.props.quantidade} </div> <div>{this.props.nomeProduto}</div> <button>X</button>
               
            </TitleDiv>
            <ValorCompra>
                <div>Valor:</div>
                <div>00,00</div>
            </ValorCompra>



        </CardCarrinho>
    )
}

}