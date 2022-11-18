import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import ThemeButton from "../ThemeButton";

import { ThemeContext } from "../../contexts/AppThemeContext";
import { ButtonGroup, ItemGroup, SettingsModalContainer } from "./styles";
import { SettingsContext } from "../../contexts/SettingsContext";

const SettingsModal: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { daysToSimulate, toggle } = useContext(SettingsContext);
  const navigate = useNavigate();

  return (
    <SettingsModalContainer>
      <header>
        <h2>Configurações</h2>
        <ThemeButton small onClick={() => navigate("..")}>
          Voltar
        </ThemeButton>
      </header>
      <ItemGroup>
        <h3>Esquema de cores</h3>
        <ButtonGroup>
          <ThemeButton
            primary={theme === "light"}
            onClick={() => setTheme("light")}
          >
            Claro <FiSun />
          </ThemeButton>
          <ThemeButton
            primary={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Escuro <FiMoon />
          </ThemeButton>
        </ButtonGroup>
      </ItemGroup>
      <ItemGroup>
        <h3>Períodos para calcular</h3>
        <p>
          Clique nos botões abaixo para selecionar quais períodos você quer que
          entre no cálculo
        </p>
        <ButtonGroup>
          <ThemeButton
            primary={!!daysToSimulate.tomorrow}
            onClick={() => toggle("tomorrow")}
          >
            Amanhã
          </ThemeButton>
          <ThemeButton
            primary={!!daysToSimulate.fifteenDays}
            onClick={() => toggle("fifteenDays")}
          >
            15 dias
          </ThemeButton>
          <ThemeButton
            primary={!!daysToSimulate.thirthyDays}
            onClick={() => toggle("thirthyDays")}
          >
            30 dias
          </ThemeButton>
          <ThemeButton
            primary={!!daysToSimulate.ninetyDays}
            onClick={() => toggle("ninetyDays")}
          >
            90 dias
          </ThemeButton>
        </ButtonGroup>
      </ItemGroup>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
