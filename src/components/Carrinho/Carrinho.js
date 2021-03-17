import React from "react";
import styled from "styled-components";


const CardCarrinho = styled.div `
border: 1px solid black;
height:600px;
margin:40px 20px 0 0 ;

`;

const TituloCarrinho = styled.h1`
text-align:center;
`;
export default class Carrinho extends React.Component{

render(){
    return(
        <CardCarrinho>
            <TituloCarrinho>Carrinho</TituloCarrinho>
        </CardCarrinho>
    )
}

}