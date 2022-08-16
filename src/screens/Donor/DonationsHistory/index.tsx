import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Load } from "../../../components/atoms/Load";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  Incident,
  DonationProps,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { ListDonationsHistory } from "../../../components/templates/ListDonationsHistory";

import { useAuth } from "../../../hooks/auth";

import { api } from "../../../services/api";

import { styles, Container } from "./styles";
import { FieldProps } from "../../../components/organisms/DonationHistory";

export function DonationsHistory() {
  const { user } = useAuth();

  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(false);

  const data: IncidentProps[] = [
    {
      id: "e90cb7ce-8f72-40ee-a05c-a8bbdb6e7751",
      name: "Tatu fudido",
      description: "ele foi todo fudido",
      cost: 1200,
      user_id: "338ce628-83b1-4fa9-b336-bf5a3e665bd8",
      donations: [
        {
          id: "10fba74d-421a-4659-a717-8a71de8eb22b",
          amount: 1200,
          incident_id: "e90cb7ce-8f72-40ee-a05c-a8bbdb6e7751",
          user_id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
          donor: {
            id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
            name: "Donor Savior",
            email: "donor@donor.com",
            phone: "(18) 99788-7240",
          },
        },
      ],
    },
    {
      id: "7a5db273-d500-449b-839a-50eeab00d5b7",
      name: "Cachorrinho atropelado",
      description: "Ong description",
      cost: 1010,
      user_id: "338ce628-83b1-4fa9-b336-bf5a3e665bd8",
      donations: [
        {
          id: "5f8e0ba3-1fa4-4c6c-b846-d03ccefd96c5",
          amount: 1010,
          incident_id: "7a5db273-d500-449b-839a-50eeab00d5b7",
          user_id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
          donor: {
            id: "8577fa7b-d69a-4f46-9f63-a076630cf0bb",
            name: "Donor Savior",
            email: "donor@donor.com",
            phone: "(18) 99788-7240",
          },
        },
      ],
    },
  ];

  useEffect(() => {
    loadDonationsDonor()
      .then((data) => successRequest(data))
      .catch((err) => failedRequest());
  }, []);

  async function loadDonationsDonor() {
    setLoading(true);
    const response = await api.get(`incidents/?donorId=${user?.id}`);

    if (!response) {
      return new Promise((reject) =>
        setTimeout(() => {
          reject([] as IncidentProps[]);
        }, 100)
      );
    }

    return response.data;
  }

  function successRequest(data: IncidentProps[]) {
    setIncidents(data);
    setLoading(false);
  }

  function failedRequest() {
    Alert.alert("Ops!", "Não foi possível carregar as suas doações");
    setLoading(false);
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header left={<ButtonGoBack />} />

        <Presentation
          title="Minhas Doações"
          subtitle={"Essas são as docões que \nvocê ajudou :)"}
        />

        {loading ? (
          <Load style={{ marginTop: 100 }} />
        ) : (
          <ListDonationsHistory data={data} />
        )}
      </Container>
    </Background>
  );
}
