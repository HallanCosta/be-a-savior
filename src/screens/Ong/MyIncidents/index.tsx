import React, { useCallback, useEffect, useRef, useState } from "react";
import { Alert, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonDonatedIncidents } from "../../../components/atoms/ButtonDonatedIncidents";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps, Ref } from "../../../components/organisms/Incident";
import { ListIncidents } from "../../../components/templates/ListIncidents";

import { useOng } from "../../../hooks/ong";

import {
  IncidentsResponse,
  loadIncidents,
  TotalIncidentsProps,
} from "../../../utils/incident";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "../MyIncidents/styles";
import { useAuth } from "../../../hooks/auth";

export function MyIncidents() {
  const navigation = useNavigation();

  const parentStateRef = useRef<Ref>({} as Ref);

  const getIncidentId = () => {
    const parentCurrentState = parentStateRef.current as Ref;
    const parentState = parentCurrentState.getIncidentId();
    setRefIncidentId(parentState);
    console.log("> Incident deleted", parentState);
  };

  const { user } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [refIncidentId, setRefIncidentId] = useState("");

  useEffect(() => {
    load();
  }, [refIncidentId]);

  async function load() {
    setLoading(true);

    try {
      const response1 = await loadIncidents({
        ongId: user?.id,
        donated: "none",
      });

      const response2 = await loadIncidents({
        ongId: user?.id,
        donated: "incomplete",
      });

      setIncidents([...response1.incidents, ...response2.incidents]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      failedRequest();
    }
  }

  function failedRequest() {
    Alert.alert("Ops", "Ocorreu um erro ao buscar os incidentes não doados");
    setLoading(false);
  }

  function handleNavigateToMyDonatedIncidents() {
    navigation.navigate("MyDonatedIncidents");
  }

  return (
    <Background gradient="ong">
      <Header
        left={<ButtonGoBack />}
        right={
          isLoading ? (
            <Load />
          ) : (
            <ButtonDonatedIncidents
              onPress={handleNavigateToMyDonatedIncidents}
            />
          )
        }
      />

      <Presentation
        title="Meus Incidentes"
        subtitle={"Aqui você visualiza, atualiza ou \nDeleta seus incidentes "}
      />

      {isLoading ? (
        <Load />
      ) : (
        <ListIncidents
          ref={parentStateRef}
          editIncident
          deleteIncident
          data={incidents}
          action={{
            delete: () => getIncidentId(),
            edit: () => {},
            view: () => {},
          }}
        />
      )}
    </Background>
  );
}
