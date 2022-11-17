import styled from "styled-components";

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.lighterTextOnBackground};

  font-family: "Inter", sans-serif;
  font-weight: 400;

  margin-bottom: 6px;

  transition: 0.2s color;
`;

export const PriceInputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  &:focus-within,
  &:focus {
    ${InputLabel} {
      color: ${({ theme }) => theme.textOnBackground};
    }
  }
`;

export const InputContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.inputBorder};
  border-radius: 4px;

  padding-left: 10px;

  display: flex;
  align-items: center;

  transition: 0.2s border-color;
  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.primary.hex};
  }
`;

export const InputSideLabel = styled.label`
  color: ${({ theme }) => theme.textOnBackground};

  margin-right: 10px;
`;

export const InputField = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.textOnBackground};
  border: none;
  outline: none;

  font-size: 1.1rem;
  line-height: 2.4rem;

  width: 100%;
`;

export const InputHint = styled.p`
  color: ${({ theme }) => theme.lighterTextOnBackground};

  font-size: 0.9rem;
`;
