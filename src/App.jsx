import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import ImgHero from "./assets/ashKetchum.svg";

import {
  Container,
  Header,
  Main,
  ButtonLink,
  Sidebar,
  Footer,
} from "./styles/layout";

function App() {
  return (
    <>
      <GlobalStyles />

      <Container className="contenedor">
        <Header className="header">
          <Navbar/>
        </Header>

        <Main className="contenido">
          <p className="title">Qual pokemón você escolheria?</p>
          <p className="subtitle">Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
          <ButtonLink>Veja os pokemons</ButtonLink>
        </Main>

        <Sidebar className="sidebar">
          <img src={ImgHero} alt="Ash-e-pikachu" />
        </Sidebar>
{/* 
        <Widget className="widget-1">Widget-1</Widget>
        <Widget className="widget-2">Widget-2</Widget> */}

        <Footer className="footer">
          Footer
        </Footer>
      </Container>
    </>
  );
}

export default App;
