import styled from "styled-components";

interface IThemeButtonProps {
  primary?: boolean;
}

const ThemeButton = styled.button<IThemeButtonProps>`
  background-color: ${({ theme, primary }) => primary ? theme.primary.hex : theme.card.title};
  color: ${({ theme, primary }) => primary ? theme.textOnBackground : theme.card.background};
  border: none;
  border-radius: 4px;

  font-size: 1.3rem;
  font-family: "Inter", sans-serif;

  padding: 0.75rem 0;

  transition: 0.2s filter;
  &:hover {
    filter: brightness(115%);

    &:active {
      filter: brightness(85%);
    }
  }

  @media screen {
    user-select: none;
  }
`;

export default ThemeButton;
