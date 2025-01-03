import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html::-webkit-scrollbar{
    width: .7rem;
  }

  html::-webkit-scrollbar-track{
    background: lightgray;
  }

  html::-webkit-scrollbar-thumb{
    background: #b11717;
    border-radius: 5rem;
  }

  input{
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    font-size: 1rem;
    height: 40px;
    padding-left: 10px;
  }

  button{
      border: none;
      border-radius: 5px;
      background-color: #b11717;
      box-shadow: 0 0 8px;
      outline: none;
      cursor: pointer;
      transition: .5s;
      &:hover{
          background-color: #dc2b2b;
      }
      &:active{
        transform: scale(.9);
      }

      .footer{
        position: absolute;
      }
  }

  .header-icon{
        font-size: 2rem;
        cursor: pointer;
        transition: .5s;
        &:hover{
            color: #b11717;
        }
        &:active{
            transform: scale(.9);
        }

    }

    .client{
      font-size: 1rem;
      text-shadow: 1px 2px 5px black;
      color: blue;
      cursor: pointer;
    }
`


export default function App(){
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  )
}