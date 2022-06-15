import styled from "styled-components";

function Home() {
  return (
    <>
      <Title className="title">Qual pokemón você escolheria?</Title>
      <Subtitle className="subtitle">
        Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
        habilidades.
      </Subtitle>
      <ButtonLink href="#">Veja os pokemons</ButtonLink>
    </>
  );
}

export default Home;

export const Title = styled.p`
  height: 152px;
  width: 454px;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 76px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 36px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.02em;
  width: 438px;
  height: 72px;
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
