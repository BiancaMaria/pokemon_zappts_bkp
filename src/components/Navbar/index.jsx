import React, { useState } from "react";
import Logo from "../../assets/logo-pokemon.png";
import styled from "styled-components";
import menu from "../../assets/menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <img className="ImgLogo" src={Logo} alt="Logo-do-pokemon" />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <img className="ImgHamburger" src={menu} alt="menu" />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">Pokemons</MenuLink>
        <MenuLink href="">Contact</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  height:100%;
  /* padding-top:10px; */
  padding-left:2rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

`;

const Hamburger = styled.div`
  /* border: 1px solid black; */
  border-radius:2px;
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top:10px;
  padding:5px;
  background-color: #fff;

  img.ImgHamburger {
      display:flex;
      width: 30px;
      height: 30px;
    }

  @media (max-width: 768px) {
    display: flex;

  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    color: #7b7fda;
    background:#fff;
    
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  width:100%;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color:#0c419d;
    /* background: rgba(0, 0, 0, 0.14);  */
    /* background: #fff44c; */
    background:#e2e2e2 ;
  } 
`;
