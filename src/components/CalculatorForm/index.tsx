import React, { useContext, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import PriceInputField from "../PriceInputField";
import ThemeButton from "../ThemeButton";

import { ThemeContext } from "../../contexts/AppThemeContext";
import { CalculatorFormContainer } from "./styles";

export type InputValues = {
  sellPrice: number;
  installments: number;
  mdr: number;
};

interface CalculatorFormProps {
  handleFormSubmit: (values: InputValues) => void;
  isLoading?: boolean;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  handleFormSubmit,
  isLoading = false,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [sellPrice, setSellPrice] = useState(1000);
  const [installments, setInstallments] = useState(1);
  const [MDR, setMDR] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleFormSubmit({ sellPrice, installments, mdr: MDR });
  }

  return (
    <CalculatorFormContainer onSubmit={handleSubmit}>
      <PriceInputField
        id="sellPrice"
        required
        sideLabel="R$"
        type="number"
        min="0"
        value={sellPrice}
        onChange={(e) => setSellPrice(e.target.valueAsNumber)}
      >
        Informe o valor da venda
      </PriceInputField>
      <PriceInputField
        id="installments"
        required
        hint="Máximo de 12 parcelas"
        type="number"
        min="0"
        max="12"
        value={installments}
        onChange={(e) => setInstallments(e.target.valueAsNumber)}
      >
        Em quantas parcelas?
      </PriceInputField>
      <PriceInputField
        id="mdr"
        required
        type="number"
        min="0"
        value={MDR}
        onChange={(e) => setMDR(e.target.valueAsNumber)}
      >
        Informe o percentual de MDR
      </PriceInputField>
      <div className="buttonGroup">
        <ThemeButton
          primary={!isLoading}
          disabled={isLoading}
          extend
          type="submit"
        >
          Calcular
        </ThemeButton>
        <ThemeButton onClick={toggleTheme} title="Trocar de tema" type="button">
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </ThemeButton>
      </div>
    </CalculatorFormContainer>
  );
};

export default CalculatorForm;
