import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";
import ImgHero from "./assets/ashKetchum.svg";
import Home from "./components/Home";

import {
  Container,
  Header,
  Main,
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
          <Home/>
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
