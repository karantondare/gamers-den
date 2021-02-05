import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #2cb1bc;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Source Sans Pro', sans-serif;
        width: 100%;
        background-color: #E8E6E1
    }
    h1{
        color: #14919B;
    }
    h2{
        font-size: 3rem;
        font-weight: bold;
        color: #333;
    }
    h3{
        font-size: 1.5rem;
        color: #0E7C86;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    
`;

export default GlobalStyles;
