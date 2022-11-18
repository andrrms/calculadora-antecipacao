import React from "react";

import {
  BackgroundContent,
  ModalContainer,
  ModalViewContainer,
} from "./styles";

interface ModalViewProps {
  view: React.ReactNode;
}

const ModalView: React.FC<React.PropsWithChildren<ModalViewProps>> = ({
  children,
  view,
}) => {
  return (
    <ModalViewContainer className="aaaa">
      <ModalContainer>{children}</ModalContainer>
      <BackgroundContent>{view}</BackgroundContent>
    </ModalViewContainer>
  );
};

export default ModalView;
