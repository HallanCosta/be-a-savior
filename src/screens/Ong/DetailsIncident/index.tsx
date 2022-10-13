import React, { useCallback, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  Incident,
  IncidentProps,
} from "../../../components/organisms/Incident";
import { ListDonations } from "../../../components/templates/ListDonations";

import { countTotalDonationsAmount } from "../../../utils/incident";

import { theme } from "../../../global/styles/theme";
import { styles, Container, Title, Footer } from "./styles";

export function DetailsIncident() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const [accumulatedDonations, setAccumulatedDonations] = useState(0);

  useEffect(
    useCallback(function () {
      setAccumulatedDonations(countTotalDonationsAmount(routeParams.donations));
    }, [])
  );

  return (
    <Background gradient="ong">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Quem foi Doador"
          subtitle={"Esses são os doadores \ndo incidente :)"}
        />

        <Incident
          data={routeParams}
          accumulatedDonations={accumulatedDonations}
        />

        <Footer>
          <Title>Doadores</Title>

          <ListDonations data={routeParams.donations} />
        </Footer>
      </Container>
    </Background>
  );
}
