import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Button } from "../../../components/atoms/Button";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Background } from "../../../components/atoms/Background";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { Ong, OngProps } from "../../../components/organisms/Ong";
import { IncidentProps } from "../../../components/organisms/Incident";

import { api } from "../../../services/api";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "./styles";

export function DetailsOng() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const [loading, setLoading] = useState(false);
  const [ong, setOng] = useState({} as OngProps);

  useEffect(() => {
    setLoading(true);

    api
      .get(`ongs/${routeParams.user_id}`)
      .then((response) => successRequest(response.data))
      .catch((error) => failedRequest());
  }, []);

  function successRequest(data: OngProps) {
    setLoading(false);
    setOng(data);
  }

  function failedRequest() {
    setLoading(false);
    Alert.alert("Ops", "Ocorreu um erro ao buscar a ong desse incidente");
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Dados da ONG"
          subtitle={
            "Esses são os dados da ong, que \npublicou o incidente. Entre em contato :)"
          }
        />

        {loading ? <Load /> : <Ong data={ong} />}
      </Container>
    </Background>
  );
}
