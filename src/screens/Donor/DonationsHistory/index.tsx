import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
import { FieldProps } from "../../../components/organisms/DonationHistory";

export function DonationsHistory() {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDonationsDonor()
      .then((data) => successRequest(data))
      .catch((err) => failedRequest());
  }, []);

  async function loadDonationsDonor() {
    setLoading(true);
    const response = await api.get(`incidents/?donorId=${user?.id}`);

    if (!response) {
      return new Promise((reject) =>
        setTimeout(() => {
          reject([] as IncidentProps[]);
        }, 100)
      );
    }

    return response.data;
  }

  function successRequest(data: IncidentProps[]) {
    setIncidents(data);
    setLoading(false);
  }

  function failedRequest() {
    Alert.alert("Ops!", "Não foi possível carregar as suas doações");
    setLoading(false);
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Minhas Doações"
          subtitle={"Essas são as docões que \nvocê ajudou :)"}
        />

        {loading ? (
          <Load style={{ marginTop: 100 }} />
        ) : (
          <ListDonationsHistory data={incidents} />
        )}
      </Container>
    </Background>
  );
}
