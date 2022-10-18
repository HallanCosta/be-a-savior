import React from "react";
import { useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  Incident,
  IncidentProps,
} from "../../../components/organisms/Incident";
import { ListDonors } from "../../../components/templates/ListDonors";

import { theme } from "../../../global/styles/theme";
import { styles, Container, Title, Footer } from "./styles";

export function DetailsIncident() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  return (
    <Background gradient="ong">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Quem foi Doador"
          subtitle={"Esses são os doadores \ndo incidente :)"}
        />

        <Incident data={routeParams} />

        <Footer>
          <Title>Doadores</Title>

          <ListDonors data={routeParams.donations} viewContact />
        </Footer>
      </Container>
    </Background>
  );
}
