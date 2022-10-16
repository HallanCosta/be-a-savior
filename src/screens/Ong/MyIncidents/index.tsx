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

import { useAuth } from "../../../hooks/auth";

import { loadIncidents } from "../../../utils/incident";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "../MyIncidents/styles";

export function MyIncidents() {
  const { navigate } = useNavigation();

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
        ongId: user.id,
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
        ongId: user?.id,
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
      console.error(err);
      Alert.alert("Ops", "Ocorreu um erro ao buscar os incidentes");
      setLoading(false);
    }
  }

  function handleNavigateToMyDonatedIncidents() {
    navigate("MyDonatedIncidents");
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
