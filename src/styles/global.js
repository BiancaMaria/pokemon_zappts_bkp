import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // *{
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

  // html {
  //   font-size: 97.5%;
  // }
  // html, body {
  //   height: 100%;
  // }

  // #root {
  //   max-width: 1080px;
  //   margin: 0 auto;
  //   padding: 40px 20px;
  // }

  // body{ 
  //   font-family:'Inter', sans-serif;
  //   color:red;
  // }

  body {
    margin: 0;
    font-family: 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .contenedor {
    grid-template-areas: "header header header"
                        "contenido contenido contenido"
                        "footer footer footer"
    ;
    }
    
    
    /*min 768px*/
    @media screen and (min-width: 768px){
    .contenedor{
    grid-template-areas:    "header header header"
                            "contenido contenido contenido"
                            "footer footer footer"
    ;
    }    
    }
    
    /*min 1024px - aqui*/
    @media screen and (min-width: 1024px){
    .contenedor{
    grid-template-areas:    "header header header"
                            "contenido contenido contenido"
                            "widget-1 widget-2 contenido"
                            "footer footer footer"
    ;
    }
    
    }
    
    /*min 1280px - aqui*/
    @media screen and (min-width: 1280px){
    .contenedor{
    grid-template-areas:    "header header header"
                            "contenido contenido contenido"
                            "widget-1 widget-1 contenido"
                            "widget-2 widget-2 contenido"
                            "footer footer footer"
    ;
    }
    
    }
`;

export default GlobalStyles;
