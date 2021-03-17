import React from "react";
import styled from "styled-components";


const CardCarrinho = styled.div `
border: 2px solid black;
display: flex;
flex-direction: column;
width: 250px;
height:800px;
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