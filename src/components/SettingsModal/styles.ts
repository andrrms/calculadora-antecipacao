import styled, { keyframes } from "styled-components";

const SwipeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30%);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const SettingsModalContainer = styled.div`
  width: 100%;
  max-width: 95vmin;
  padding: 20px;

  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid rgba(${({ theme }) => theme.card.border}, 0.2);
  border-radius: 6px;

  animation: 0.3s ${SwipeUp} forwards;

  display: flex;
  flex-direction: column;
  gap: 30px;

  header {
    margin-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
`;

export const ItemGroup = styled.div``;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    gap: 10px;
    flex: 1;
  }
`;
