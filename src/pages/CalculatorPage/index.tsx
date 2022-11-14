import React from "react";
import SimulationCard from "../../components/SimulationCard";

import { CalculatorPageContainer } from "./styles";

const CalculatorPage: React.FC = () => {
  return (
    <CalculatorPageContainer>
      <SimulationCard />
    </CalculatorPageContainer>
  );
};

export default CalculatorPage;
