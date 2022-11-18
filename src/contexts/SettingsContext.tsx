import React, { createContext, useState } from "react";

export type DaysToSimulate = {
  tomorrow: boolean;
  fifteenDays: boolean;
  thirthyDays: boolean;
  ninetyDays: boolean;
};

interface SettingsContextProps {
  daysToSimulate: DaysToSimulate;
  toggle: (key: keyof DaysToSimulate) => void;
}

const initialContext: SettingsContextProps = {
  daysToSimulate: {
    tomorrow: true,
    fifteenDays: true,
    thirthyDays: true,
    ninetyDays: true,
  },
  toggle: () => {},
};

export const SettingsContext =
  createContext<SettingsContextProps>(initialContext);

const SettingsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [simulationSettings, setSimulationSettings] = useState<DaysToSimulate>(
    initialContext.daysToSimulate
  );

  function toggle(key: keyof DaysToSimulate) {
    setSimulationSettings({
      ...simulationSettings,
      [key]: !simulationSettings[key],
    });
  }

  return (
    <SettingsContext.Provider
      value={{ daysToSimulate: simulationSettings, toggle }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
