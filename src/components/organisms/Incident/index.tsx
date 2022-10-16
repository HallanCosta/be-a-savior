import React, { useImperativeHandle, forwardRef, useState } from "react";
import { Alert, ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Load } from "../../atoms/Load";
import { InputCard } from "../../molecules/InputCard";

import { currencyFormatBRL } from "../../../utils/currencyFormat";
import { countTotalDonationsAmount } from "../../../utils/incident";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import { styles, Container, ContentCard, Trash } from "./styles";

type DonorProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type DonationProps = {
  id: string;
  incident_id: string;
  user_id: string;
  amount: number;
  donor: DonorProps;
};

export type IncidentProps = {
  id: string;
  name: string;
  description: string;
  cost: number;
  donations: DonationProps[];
  user_id: string;
};

export type ActionProps = {
  delete: () => void;
  edit: () => void;
  view: () => void;
};

type Props = ViewProps & {
  data: IncidentProps;
  action?: ActionProps;
  editIncident?: boolean;
  deleteIncident?: boolean;
  viewIncident?: boolean;
};

export type Ref = ViewProps & {
  getIncidentId: () => string;
};

export const Incident = forwardRef<Ref, Props>(
  (
    {
      editIncident,
      viewIncident,
      deleteIncident,
      data,
      action = { delete: () => {}, edit: () => {}, view: () => {} },
    },
    _ref
  ) => {
    const { user, headers } = useAuth();

    const { navigate } = useNavigation();

    const [loading, setLoading] = useState(false);
    const [incidentId, setIncidentId] = useState("");

    const totalDonationsAmount = countTotalDonationsAmount(data.donations);

    useImperativeHandle(_ref, () => ({
      getIncidentId: () => {
        return incidentId;
      },
    }));

    function handleNavigateToEditIncident() {
      action.edit();
      navigate("EditIncident", data);
    }

    function handleNavigateToDetailsIncident() {
      action.view();
      navigate("DetailsIncident", data);
    }

    function handleNavigateToDonateIncident() {
      action.view();
      navigate("DonateIncident", data);
    }

    function handleViewIncidentButton() {
      switch (user.owner) {
        case "ong":
          handleNavigateToDetailsIncident();
          break;
        case "donor":
          handleNavigateToDonateIncident();
          break;
        case "guest":
          handleNavigateToDetailsIncident();
          break;
        default:
          Alert.alert("handleViewIncidentButton", "Usuário não encontrado");
          break;
      }
    }

    async function handleDeleteIncident() {
      try {
        setLoading(true);

        const response = await api.delete(`incidents/${data.id}`, headers);

        if (!response) {
          Alert.alert("Oops", "Não foi possível deletar o incidente");
          return;
        }

        setIncidentId(data.id);
        setLoading(false);
        action.delete();
      } catch (err) {
        console.error(err);
        failedRequest();
      }
    }

    function failedRequest() {
      Alert.alert("Ops", "Ocorreu um erro fatal ao deletar o incidente");
      setLoading(false);
    }

    function handleMessageIncident() {
      console.log("> Message Incident");
      Alert.alert(
        "",
        `Você deseja realmente deletar o incidente ${data.name}?`,
        [
          {
            text: "Sim",
            style: "default",
            onPress: handleDeleteIncident,
          },
          {
            text: "Não",
            style: "default",
          },
        ]
      );
    }

    return (
      <>
        {loading ? (
          <Load />
        ) : (
          <Container>
            <ContentCard>
              <InputCard title="Nome do Incidente" subtitle={data.name} />

              {deleteIncident && (
                <RectButton onPress={handleMessageIncident}>
                  <Feather name="trash-2" size={24} color="#C54747" />
                </RectButton>
              )}
            </ContentCard>

            <InputCard title="Descrição" subtitle={data.description} />

            <InputCard title="Custo" subtitle={currencyFormatBRL(data.cost)} />

            <ContentCard>
              <InputCard
                title="Doações Acumuladas"
                subtitle={currencyFormatBRL(totalDonationsAmount)}
              />

              {editIncident && (
                <BorderlessButton
                  onPress={handleNavigateToEditIncident}
                  style={styles.details}
                >
                  <Feather
                    name="arrow-left"
                    size={30}
                    color={theme.colors.ong.background100}
                  />
                </BorderlessButton>
              )}

              {viewIncident && (
                <BorderlessButton
                  onPress={handleViewIncidentButton}
                  style={styles.details}
                >
                  <Feather
                    name="arrow-right"
                    size={30}
                    color={theme.colors.ong.background100}
                  />
                </BorderlessButton>
              )}
            </ContentCard>
          </Container>
        )}
      </>
    );
  }
);
