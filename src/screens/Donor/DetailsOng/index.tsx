import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Load } from "../../../components/atoms/Load";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { UserCard } from "../../../components/organisms/UserCard";
import { IncidentProps } from "../../../components/organisms/Incident";

import { fetchUser, UserResponse } from "../../../utils/user";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "./styles";

export function DetailsOng() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const [loading, setLoading] = useState(false);
  const [ong, setOng] = useState({} as UserResponse);

  useEffect(() => {
    loadOng();
  }, []);

  async function loadOng() {
    setLoading(true);

    try {
      const response = await fetchUser(routeParams.user_id);

      if (!response) {
        setLoading(false);
        return;
      }

      setOng(response);
      setLoading(false);
    } catch (err) {
      Alert.alert("Ops", "Ocorreu um erro ao buscar a ong desse incidente");
      setLoading(false);
    }
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Dados da ONG"
          subtitle={"Esses são os dados da ong, que \npublicou este incidente."}
        />

        {loading ? <Load /> : <UserCard data={ong} />}
      </Container>
    </Background>
  );
}
