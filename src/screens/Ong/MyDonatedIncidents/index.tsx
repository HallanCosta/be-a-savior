import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import { Load } from "../../../components/atoms/Load";
import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps } from "../../../components/organisms/Incident";
import { ListIncidents } from "../../../components/templates/ListIncidents";

import { loadIncidents } from "../../../utils/incident";

import { useAuth } from "../../../hooks/auth";

import { styles, Container } from "./styles";
import { MessageError } from "../../../components/atoms/MessageError";

export function MyDonatedIncidents() {
  const { user } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    try {
      const response = await loadIncidents({
        ongId: user.id,
        donated: "complete",
      });

      if (!response) {
        Alert.alert(
          "Ops",
          "Não foi possível buscar os incidentes que estão com as doações completas"
        );
        return;
      }

      setIncidents(response.incidents);
      setLoading(false);
    } catch (err) {
      console.error(err);
      Alert.alert("Ops", "Ocorreu um erro ao buscar os incidentes");
      setLoading(false);
    }
  }

  const hasIncident = incidents.length > 0;

  return (
    <Background gradient="ong">
      <Header left={<ButtonGoBack />} />

      <Presentation
        title="Incidentes doados"
        subtitle={"Aqui é listado os incidentes que \ntem as doações completa"}
      />

      {isLoading ? (
        <Load />
      ) : !hasIncident ? (
        <MessageError message="Você ainda não tem nenhum incidente com doação completa" />
      ) : (
        <ListIncidents viewIncident data={incidents} />
      )}
    </Background>
  );
}
