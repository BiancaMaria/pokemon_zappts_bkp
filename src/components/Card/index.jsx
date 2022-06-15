import styled from "styled-components";

function Card() {
  return (
    <>
      <Subtitle>
        Mais de 250 Pokemons para você escolher o seu favorito
      </Subtitle>
    </>
  );
}

export default Card;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 36px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.02em;
  width: 438px;
  height: 72px;

`;