import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonLogout } from "../../../components/atoms/ButtonLogout";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps } from "../../../components/organisms/Incident";
import { ListIncidents } from "../../../components/templates/ListIncidents";

import { loadIncidents } from "../../../utils/incident";

import { styles, Container } from "./styles";

export function ShowIncidents() {
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  async function load() {
    setLoading(true);

    try {
      const response1 = await loadIncidents({
        donated: "none",
      });

      if (!response1) {
        Alert.alert(
          "Ops",
          "Não foi possível buscar os incidentes que não foram doados"
        );
        setLoading(false);
        return;
      }

      const response2 = await loadIncidents({
        donated: "incomplete",
      });

      if (!response2) {
        Alert.alert(
          "Ops",
          "Não foi possível buscar os incidentes que estão com as doações incompletas"
        );
        setLoading(false);
        return;
      }

      setIncidents([...response1.incidents, ...response2.incidents]);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      Alert.alert("Ops", "Ocorreu um erro inesperado ao buscar os incidentes");
      setLoading(false);
    }
  }

  return (
    <Background gradient="guest">
      <Header right={<ButtonLogout />} />

      <Presentation
        title="Incidentes"
        subtitle={"Aqui você encontra todos \nos casos das ONGs."}
      />

      {loading ? <Load /> : <ListIncidents data={incidents} viewIncident />}
    </Background>
  );
}
