import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonLogout } from "../../../components/atoms/ButtonLogout";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps } from "../../../components/organisms/Incident";
import { ListIncidents } from "../../../components/templates/ListIncidents";

import { useAuth } from "../../../hooks/auth";

import { styles, Container } from "./styles";
import { api } from "../../../services/api";
import { loadIncidents } from "../../../utils/incident";

export function ShowIncidents() {
  const { signOut } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    try {
      const response = await loadIncidents({});

      if (!response) {
        Alert.alert("Ops", "Não foi possível buscar os incidentes");
        setLoading(false);
        return;
      }

      setIncidents(response.incidents);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      Alert.alert("Ops", "Ocorreu um erro inesperado ao buscar os incidentes");
      setLoading(false);
    }
  }

  return (
    <Background gradient="guest">
      <Header right={<ButtonLogout gradient="guest" onPress={signOut} />} />

      <Presentation
        title="Incidentes"
        subtitle={"Aqui você encontra todos \nos casos das ONGs."}
      />

      {loading ? <Load /> : <ListIncidents data={incidents} viewIncident />}
    </Background>
  );
}
