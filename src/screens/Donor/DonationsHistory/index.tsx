import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { MessageError } from "../../../components/atoms/MessageError";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps } from "../../../components/organisms/Incident";

import { ListDonations } from "../../../components/templates/ListDonations";

import { useAuth } from "../../../hooks/auth";

import { styles, Container } from "./styles";
import { loadIncidents } from "../../../utils/incident";

export function DonationsHistory() {
  const { user } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    try {
      const response = await loadIncidents({ donorId: user.id });

      if (!response) {
        Alert.alert("Ops", "Não foi possível carregar as suas doações");
        setLoading(false);
        return;
      }

      setIncidents(response.incidents);
      setLoading(false);
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Ops",
        "Ocorreu um erro inesperado ao carregar as suas doações"
      );
      setLoading(false);
    }
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
        ) : incidents.length > 0 ? (
          <ListDonations data={incidents} viewDonation />
        ) : (
          <MessageError message="Você ainda não fez nenhuma doação" />
        )}
      </Container>
    </Background>
  );
}
