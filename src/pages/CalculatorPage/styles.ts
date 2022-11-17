import styled from "styled-components";

export const CalculatorPageContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;

    padding: 10px;
  }
`;
