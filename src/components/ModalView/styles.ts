import styled from "styled-components";

export const ModalViewContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.aside`
  z-index: 5000;
  position: absolute;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
`;

export const BackgroundContent = styled.div`
  z-index: 1;
`;
