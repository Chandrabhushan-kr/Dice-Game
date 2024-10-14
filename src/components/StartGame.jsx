import styled, { createGlobalStyle } from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <div>
          <img src="/images/dices.png" alt="" />
        </div>
        <div className="content">
          <h1>DICE GAME</h1>
          <Button
            onClick={toggle}
          >Play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;


