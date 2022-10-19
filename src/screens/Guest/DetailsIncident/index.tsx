import React from "react";
import { useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import {
  Incident,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { ListDonors } from "../../../components/templates/ListDonors";

import { styles, Container, Footer, FooterTitle } from "./styles";

export function DetailsIncident() {
  const route = useRoute();
  const incident = route.params as IncidentProps;

  return (
    <Background gradient="guest">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Detalhes do incidente"
          subtitle={"Veja os detalhes do \ndo incidente :)"}
        />

        <Incident data={incident} />

        <Footer>
          <FooterTitle>Doadores</FooterTitle>
          <ListDonors data={incident.donations} />
        </Footer>
      </Container>
    </Background>
  );
}
