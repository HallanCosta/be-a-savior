import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { InputCard } from "../../../components/molecules/InputCard";
import {
  Incident,
  IncidentProps,
} from "../../../components/organisms/Incident";
import { ListDonations } from "../../../components/templates/ListDonations";

import { countTotalDonationsAmount } from "../../../utils/incident";

import { styles, Container, Footer, FooterTitle } from "./styles";

export function DetailsIncident() {
  const route = useRoute();
  const incident = route.params as IncidentProps;

  const countDonations = countTotalDonationsAmount(incident.donations);

  return (
    <Background gradient="guest">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Detalhes do incidente"
          subtitle={"Veja os detalhes do \ndo incidente :)"}
        />

        <Incident data={incident} accumulatedDonations={countDonations} />

        <Footer>
          <FooterTitle>Doadores</FooterTitle>
          <ListDonations data={incident.donations} showContact={false} />
        </Footer>
      </Container>
    </Background>
  );
}
