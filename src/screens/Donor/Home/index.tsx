import React, { useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { ButtonBig } from "../../../components/atoms/ButtonBig";
import { Presentation } from "../../../components/molecules/Presentation";
import { ButtonLogout } from "../../../components/atoms/ButtonLogout";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import { styles, Container, Content } from "./styles";

export function Home() {
  const { user, signOut } = useAuth();

  const { navigate } = useNavigation();

  function handleNavigateToDonationsHistory() {
    navigate("DonationsHistory");
  }

  function handleNavigateToShowIncidents() {
    navigate("ShowIncidents");
  }

  return (
    <Background gradient="donor">
      <Header right={<ButtonLogout />} />

      <Presentation
        title={`Olá ${user.name}. \nSeja bem vindo`}
        subtitle={"Ajude os incidentes sendo \num doador fiel."}
      />

      <Content>
        <ButtonBig
          title={"Histórico\n de doações"}
          color={theme.colors.blue}
          onPress={handleNavigateToDonationsHistory}
        />

        <ButtonBig
          title={"Visualizar\n Incidentes"}
          color={theme.colors.green}
          onPress={handleNavigateToShowIncidents}
        />
      </Content>
    </Background>
  );
}
