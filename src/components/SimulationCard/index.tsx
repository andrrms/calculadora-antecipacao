import React, { useRef, useState } from "react";
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

const SimulationCard: React.FC = () => {
  const resultListRef = useRef<any>();
  const [apiData, setApiData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit({ sellPrice, installments, mdr }: InputValues) {
    setIsLoading(true);

    toast
      .promise(
        api.post("/", { amount: sellPrice, installments, mdr }),
        {
          loading: "Carregando...",
          success: (res) => {
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

  return (
    <SimulationCardContainer>
      <Content>
        <h1>Simule sua antecipação</h1>
        <CalculatorForm handleFormSubmit={handleSubmit} isLoading={isLoading} />
      </Content>
      <SidePanel>
        <h2>Você receberá:</h2>
        <ol ref={resultListRef}>
          <li>
            Amanhã:{" "}
            <span>
              {(apiData ? apiData["1"] : 0).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </span>
          </li>
          <li>
            Em 15 dias:{" "}
            <span>
              {(apiData ? apiData["15"] : 0).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </span>
          </li>
          <li>
            Em 30 dias:{" "}
            <span>
              {(apiData ? apiData["30"] : 0).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </span>
          </li>
          <li>
            Em 90 dias:{" "}
            <span>
              {(apiData ? apiData["90"] : 0).toLocaleString("pt-BR", {
                currency: "BRL",
                style: "currency",
              })}
            </span>
          </li>
        </ol>
      </SidePanel>
    </SimulationCardContainer>
  );
};

export default SimulationCard;
