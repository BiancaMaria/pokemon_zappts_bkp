import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
`;

export const Header = styled.header`
  grid-area: header;
  /* background: rgba(0, 0, 0, 0.16); */
  /* border: 1px solid yellow; */
  background:orange;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height:70px;
`;

export const Main = styled.main`
  grid-area: contenido;
  padding-left: 2%;
`;
export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: green;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Widget = styled.div`
  grid-area: ${(props) =>
    props.className === "widget-1" ? "widget-1" : "widget-2"}; //área

  background: orchid;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.16);
  grid-area: footer;
  padding: 20px;
  position: relative;
  color: #fff;
`;

// .ImgLogo{
//   border: 1px solid red;
//   position: absolute;
//   width: 142px;
//   height: 51px;
//   left: 115px;
//   top: 708px;
// }


  


