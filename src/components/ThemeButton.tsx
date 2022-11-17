import styled, { css } from "styled-components";

interface IThemeButtonProps {
  primary?: boolean;
  extend?: boolean;
}

const ThemeButton = styled.button<IThemeButtonProps>`
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary.hex : theme.card.title};
  color: ${({ theme, primary }) =>
    primary ? theme.textOnBackground : theme.card.background};
  border: none;
  border-radius: 4px;

  font-size: 1.3rem;
  font-family: "Inter", sans-serif;

  padding: 0.75rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s filter;
  &:hover {
    filter: brightness(115%);

    &:active {
      filter: brightness(85%);
    }
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(80%);

    &:hover {
      filter: brightness(75%);

      &:active {
        filter: brightness(75%);
      }
    }
  }

  @media screen {
    user-select: none;
  }

  ${({ extend }) =>
    extend &&
    css`
      width: 100%;
    `}
`;

export default ThemeButton;
