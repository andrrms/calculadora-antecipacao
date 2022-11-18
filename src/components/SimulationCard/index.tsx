import React, { useRef, useState, useContext } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-hot-toast";

import api from "../../api";
import CalculatorForm, { InputValues } from "../CalculatorForm";

import {
  Content,
  SidePanel,
  SimulationCardContainer,
  ToastErrorBody,
  ToastErrorBtn,
} from "./styles";
import {
  DaysToSimulate,
  SettingsContext,
} from "../../contexts/SettingsContext";

const SimulationCard: React.FC = () => {
  const resultListRef = useRef<any>();
  const [apiData, setApiData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { daysToSimulate } = useContext(SettingsContext);

  async function handleSubmit({ sellPrice, installments, mdr }: InputValues) {
    setIsLoading(true);

    toast
      .promise(
        api.post("/", {
          amount: sellPrice,
          installments,
          mdr,
          days: Object.entries(daysToSimulate)
            // eslint-disable-next-line array-callback-return
            .map(([key, value]) => {
              if (!value) return null;

              switch (key as keyof DaysToSimulate) {
                case "tomorrow":
                  return 1;
                case "fifteenDays":
                  return 15;
                case "thirthyDays":
                  return 30;
                case "ninetyDays":
                  return 90;
              }
            })
            .filter((v) => v),
        }),
        {
          loading: "Carregando...",
          success: (res) => {
            console.log(res.data);
            setApiData(res.data);
            resultListRef.current?.scrollIntoView({ behavior: "smooth" });
            return "Feito";
          },
          error: (err) => {
            return (
              <ToastErrorBody>
                {err.response.data.message
                  ? "Ocorreu um erro ao processar a sua solicitação, tente novamente mais tarde."
                  : err.response.data}
                <ToastErrorBtn onClick={() => toast.dismiss()}>
                  <FiX />
                </ToastErrorBtn>
              </ToastErrorBody>
            );
          },
        },
        {
          error: {
            duration: 10000,
          },
        }
      )
      .finally(() => setIsLoading(false));
  }

  function numberToMoneyString(num: number) {
    return (num || 0).toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    });
  }

  return (
    <SimulationCardContainer>
      <Content>
        <h1>Simule sua antecipação</h1>
        <CalculatorForm handleFormSubmit={handleSubmit} isLoading={isLoading} />
      </Content>
      <SidePanel>
        <h2>Você receberá:</h2>
        <ol ref={resultListRef}>
          {daysToSimulate.tomorrow && (
            <li>
              Amanhã:{" "}
              <span>{numberToMoneyString(apiData && apiData["1"])}</span>
            </li>
          )}
          {daysToSimulate.fifteenDays && (
            <li>
              Em 15 dias:{" "}
              <span>{numberToMoneyString(apiData && apiData["15"])}</span>
            </li>
          )}
          {daysToSimulate.thirthyDays && (
            <li>
              Em 30 dias:{" "}
              <span>{numberToMoneyString(apiData && apiData["30"])}</span>
            </li>
          )}
          {daysToSimulate.ninetyDays && (
            <li>
              Em 90 dias:{" "}
              <span>{numberToMoneyString(apiData && apiData["90"])}</span>
            </li>
          )}
        </ol>
      </SidePanel>
    </SimulationCardContainer>
  );
};

export default SimulationCard;
