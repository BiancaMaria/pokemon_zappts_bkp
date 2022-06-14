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
  background: orange;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 70px;
`;

export const Main = styled.main`
  grid-area: contenido;
  min-height:115%;
  width: 100%;
  padding-left:4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border:1px solid pink;  */
  display: flex;
  position: relative;
  p.title {
    /* border:1px solid red;  */
    height: 152px;
    width:454px;
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 76px;
  }
  p.subtitle {
    /* border:1px solid blue;  */
    font-size: 16px;
    line-height: 36px;
    font-weight:400;
    font-style: normal;
    letter-spacing: 0.02em;
    width: 438px;
    height: 72px;
  }
`;

export const ButtonLink = styled.a`
  background: #48d0b0;
  color: #fff;
  border-style: none;
  border-radius: 11px;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  width: 182px;
  height: 38px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
  padding-left: 26px;
  padding-top: 16px;
  
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  /* border:1px solid green;  */
  height: 482px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
  }
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
  text-align: center;
`;
