import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  Incident,
  DonationProps,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { ListDonationsHistory } from "../../../components/templates/ListDonationsHistory";

import { useAuth } from "../../../hooks/auth";

import { api } from "../../../services/api";

import { styles, Container } from "./styles";
import {
  DonationHistory,
  FieldProps,
} from "../../../components/organisms/DonationHistory";
import { countTotalDonationsAmount } from "../../../utils/incident";
import { OngProps } from "../../../components/organisms/Ong";

export function DonationDetails() {
  const { params } = useRoute();
  const routeParams = params as IncidentProps;

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [ong, setOng] = useState<OngProps>({} as OngProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    loadOng()
      .then((data) => ongSuccessRequest(data))
      .catch((_) => ongFailedRequest());

    loadIncidents()
      .then((data) => incidentsSuccessRequest(data))
      .catch((_) => incidentsFailedRequest());
  }, []);

  async function loadOng(): Promise<OngProps> {
    const response = await api.get(`ongs/${routeParams.user_id}`);

    if (!response) {
      return new Promise((reject) => {
        setTimeout(() => {
          reject({} as OngProps);
        }, 100);
      });
    }

    return response.data;
  }

  async function loadIncidents(): Promise<IncidentProps[]> {
    const response = await api.get(`incidents`);

    if (!response) {
      return new Promise((reject) => {
        setTimeout(() => {
          reject([] as IncidentProps[]);
        }, 100);
      });
    }

    return response.data;
  }

  function ongSuccessRequest(data: OngProps) {
    setOng(data);
  }

  function ongFailedRequest() {
    Alert.alert("Ops!", "Não foi possível carregar o nome da ONG");
  }

  function incidentsSuccessRequest(data: IncidentProps[]) {
    setIncidents(data);
    setLoading(false);
  }

  function incidentsFailedRequest() {
    Alert.alert("Ops!", "Não foi possível carregar as doações acumaladas");
    setLoading(false);
  }

  const totalDonationsDonor = countTotalDonationsAmount(routeParams.donations);

  const incidentFinded = incidents.find((incident) =>
    routeParams.id === incident.id ? incident : null
  );

  const totalDonationsIncident = countTotalDonationsAmount(
    incidentFinded ? incidentFinded.donations : []
  );

  const renderFields: FieldProps[] = [
    {
      key: "1",
      title: "Nome da ONG",
      subtitle: ong.name,
      type: "text",
    },
    {
      key: "2",
      title: "Nome do Incidente",
      subtitle: routeParams.name,
      type: "text",
    },
    {
      key: "3",
      title: "Custo",
      subtitle: String(routeParams.cost),
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
      subtitle: String(totalDonationsDonor),
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
          <DonationHistory
            data={routeParams}
            fields={renderFields}
            showArrowRight={false}
          />
        )}
      </Container>
    </Background>
  );
}
