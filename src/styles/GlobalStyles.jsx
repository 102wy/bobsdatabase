import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
        font-size: 14px;
    }
  body {
    font-family: 'DungGeunMo', 'Noto Sans KR', sans-serif;
    color: #505050;
    background-color: #c0c0c0;
  }
  input {
    border-radius: 0;
    border-right: 2px solid #3e3e3e;
    border-bottom: 2px solid #3e3e3e;
    border-left: 2px solid #ededed;
    border-top: 2px solid #ededed;
  }
  button {
    border-radius: 0%;
    background-color: #c0c0c0;
    color: black;
    padding: 0 10px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul,li {
    list-style: none;
  }
  img {
    max-width: calc(100vw - 40px);
    margin-bottom: 20px;
    
  }

  .keyword {
    color: #6d1787;
    font-weight: bold;
  }
  .bold {
    color: #000
  }
`;
