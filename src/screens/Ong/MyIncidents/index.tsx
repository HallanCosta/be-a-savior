import React, { useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonDonatedIncidents } from "../../../components/atoms/ButtonDonatedIncidents";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { ListIncidents } from "../../../components/templates/ListIncidents";

import { useOng } from "../../../hooks/ong";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "../MyIncidents/styles";

export function MyIncidents() {
  const navigation = useNavigation();

  const ong = useOng();

  useFocusEffect(
    useCallback(() => {
      return ong.loadIncidents();
    }, [])
  );

  function handleNavigateToMyDonatedIncidents() {
    navigation.navigate("MyDonatedIncidents", {
      incidents: ong.incidents,
      total: ong.total,
    });
  }

  return (
    <Background gradient="ong">
      <Header
        left={<ButtonGoBack />}
        right={
          ong.loading ? (
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

      {ong.loading ? (
        <Load />
      ) : (
        <ListIncidents
          routerName="EditIncident"
          data={ong.incidents}
          total={ong.total}
          donated={false}
          showTrash={true}
        />
      )}
    </Background>
  );
}
