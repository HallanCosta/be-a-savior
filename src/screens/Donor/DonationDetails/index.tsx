import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  DonationProps,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { DonationCard } from "../../../components/organisms/DonationCard";
import {
  countTotalDonationsAmount,
  InputFieldProps,
  loadIncident,
  loadIncidents,
} from "../../../utils/incident";
import { fetchUser, UserResponse } from "../../../utils/user";

import { useAuth } from "../../../hooks/auth";

import { styles, Container } from "./styles";

type RouteParams = {
  incident: IncidentProps;
  donation: DonationProps;
};

export function DonationDetails() {
  const { params } = useRoute();
  const routeParams = params as RouteParams;

  const [incident, setIncident] = useState<IncidentProps>({} as IncidentProps);
  const [ong, setOng] = useState<UserResponse>({} as UserResponse);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    try {
      const responseOng = await fetchUser(routeParams.incident.user_id);

      if (!responseOng) {
        Alert.alert("Ops", "Não foi possível a ong");
        setLoading(false);
        return;
      }

      const responseIncident = await loadIncident(routeParams.incident.id);

      if (!responseIncident) {
        Alert.alert("Ops", "Não foi possível buscar as doações do incidente");
        setLoading(false);
        return;
      }

      setOng(responseOng);
      setIncident(responseIncident);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      Alert.alert("Ops", "Ocorreu um erro inesperado ao buscar o incidente");
      setLoading(false);
    }
  }

  const totalDonationsIncident = countTotalDonationsAmount(
    incident.donations ? incident.donations : []
  );

  const renderFields: InputFieldProps[] = [
    {
      key: "1",
      title: "Nome da ONG",
      subtitle: ong.name,
      type: "text",
    },
    {
      key: "2",
      title: "Nome do Incidente",
      subtitle: routeParams.incident.name,
      type: "text",
    },
    {
      key: "3",
      title: "Custo",
      subtitle: String(routeParams.incident.cost),
      type: "money",
    },
    {
      key: "4",
      title: "Doações acumuladas",
      subtitle: String(totalDonationsIncident),
      type: "money",
    },
    {
      key: "5",
      title: "Quantia doada",
      subtitle: String(routeParams.donation.amount),
      type: "money",
    },
  ];

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Dados completo"
          subtitle={"Esse são os dados completo da doação \nque você ajudou :)"}
        />

        {loading ? (
          <Load style={{ marginTop: 100 }} />
        ) : (
          <DonationCard
            incident={routeParams.incident}
            donation={routeParams.donation}
            fields={renderFields}
          />
        )}
      </Container>
    </Background>
  );
}
