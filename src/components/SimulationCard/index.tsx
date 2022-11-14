import React, { useContext } from "react";

import ThemeButton from "../ThemeButton";
import { ThemeContext } from "../../contexts/AppThemeContext";

import { Content, SidePanel, SimulationCardContainer } from "./styles";

const SimulationCard: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SimulationCardContainer>
      <Content>
        <h1>Simule sua antecipação</h1>
        <ThemeButton primary onClick={toggleTheme}>Trocar de tema</ThemeButton>
      </Content>
      <SidePanel>
        <h2>Você receberá:</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo magnam distinctio, perferendis beatae asperiores fugiat. Nostrum minima possimus hic eius incidunt. Sit magni praesentium ex unde corporis cupiditate amet eos!</p>
      </SidePanel>
    </SimulationCardContainer>
  );
};

export default SimulationCard;
