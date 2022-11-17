import styled from "styled-components";

export const SimulationCardContainer = styled.main`
  background-color: ${({ theme }) => theme.card.background};
  border: 2px solid rgba(${({ theme }) => theme.card.border}, 0.2);
  border-radius: 8px;

  width: fit-content;
  max-width: 95vmin;
  margin-bottom: 5vh;

  display: grid;
  grid-template-columns: 1fr min(40%, 350px);

  & > * {
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min(40%, fit-content);
  }

  transition: 0.2s background-color, 0.1s color;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: ${({ theme }) => theme.card.title};
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: 700;
  }
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  height: 100%;

  background-color: rgba(${({ theme }) => theme.card.sidePanel}, 0.05);
  border-left: 1px solid rgba(${({ theme }) => theme.card.sidePanel}, 0.075);

  @media screen and (max-width: 768px) {
    border-left: none;
    border-top: 1px solid rgba(${({ theme }) => theme.card.sidePanel}, 0.075);
  }

  h2 {
    color: ${({ theme }) => theme.primary.hex};
    border-bottom: 1px solid rgba(${({ theme }) => theme.primary.rgb}, 0.25);

    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-style: italic;

    padding-bottom: 8px;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 20px;

    li {
      font-family: "Inter", sans-serif;

      color: ${({ theme }) => theme.lightPrimary};

      span {
        font-weight: 700;

        color: ${({ theme }) => theme.primary.hex};
      }
    }
  }
`;

export const ToastErrorBody = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const ToastErrorBtn = styled.span`
  background-color: transparent;
  border: 2px solid #eee;
  border-radius: 4px;
  cursor: pointer;

  width: fit-content;
  height: fit-content;
  padding: 3px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
