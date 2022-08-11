import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { DonationProps } from "../../../components/organisms/Incident";
import { ListDonations } from "../../../components/templates/ListDonations";
import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

import { styles, Container, Content } from "./styles";

export function DonationHistory() {
  const { user } = useAuth();

  const [donations, setDonations] = useState<DonationProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDonationsDonor();
  }, []);

  async function loadDonationsDonor() {
    const response = await api.get(`donors/${user?.id}`);

    if (!response) {
      Alert.alert("Ops!", "Não foi possível carregar as suas doações");
      return;
    }

    const data = {
      id: "a5941bbf-13b7-4ab4-b1ca-84caa31369d9",
      name: "Hállan donor",
      email: "hallan.donor@hotmail.com",
      phone: "(18) 99767-6538",
      owner: "donor",
      donations: [
        {
          id: "a1",
          incident_id: "b1",
          user_id: "c1",
          amount: 1000,
          donor: {
            id: "d1",
            name: "nome teste",
            email: "teste@hotmail.com",
            phone: "123456789",
          },
        },
        {
          id: "a2",
          incident_id: "b2",
          user_id: "c2",
          amount: 20000,
          donor: {
            id: "d3",
            name: "nome teste",
            email: "teste@hotmail.com",
            phone: "123456789",
          },
        },
      ],
    };
    setDonations(data.donations);
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Minhas Doações"
          subtitle={"Essas são as docões que \nvocê ajudou :)"}
        />

        <Content>
          {loading ? <Load /> : <ListDonations data={donations} />}
        </Content>
      </Container>
    </Background>
  );
}
