import React from "react";

import {
  InputContainer,
  InputField,
  InputHint,
  InputLabel,
  InputSideLabel,
  PriceInputFieldContainer,
} from "./styles";

interface PriceInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  sideLabel?: string;
  hint?: string;
}

const PriceInputField: React.FC<
  React.PropsWithChildren<PriceInputFieldProps>
> = ({ children, id, hint, sideLabel, ...HTMLInputProps }) => {
  return (
    <PriceInputFieldContainer>
      <InputLabel htmlFor={id}>{children}{HTMLInputProps.required && "*"}</InputLabel>
      <InputContainer>
        {sideLabel && <InputSideLabel htmlFor={id}>{sideLabel}</InputSideLabel>}
        <InputField id={id} {...HTMLInputProps} />
      </InputContainer>
      {hint && <InputHint>{hint}</InputHint>}
    </PriceInputFieldContainer>
  );
};

export default PriceInputField;
