import GlobalStyles from "./styles/global";
import Navbar from "./components/Navbar";

import {
  Container,
  Header,
  Main,
  Sidebar,
  Widget,
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
          <h2>Qual pokemón você escolheria?</h2>
        </Main>

        <Sidebar className="sidebar">Sidebar</Sidebar>

        <Widget className="widget-1">Widget-1</Widget>
        <Widget className="widget-2">Widget-2</Widget>

        <Footer className="footer">
          
        </Footer>
      </Container>
    </>
  );
}

export default App;
