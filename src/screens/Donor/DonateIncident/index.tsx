import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as yup from "yup";

import { Background } from "../../../components/atoms/Background";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { ButtonDonatedIncidents } from "../../../components/atoms/ButtonDonatedIncidents";
import { Button } from "../../../components/atoms/Button";
import { Header } from "../../../components/molecules/Header";
import { Input } from "../../../components/molecules/Input";
import { ModalDonation } from "../../../components/molecules/ModalDonation";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  Incident,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { countTotalDonationsAmount } from "../../../utils/incident";
import { currency } from "../../../utils/currencyFormat";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import { styles, Container, ButtonWrapper, Footer, Title } from "./styles";
import { Load } from "../../../components/atoms/Load";

type DonationProps = {
  amount: number;
  incident_id: string;
};

type YupValidationDonationDatasProps = {
  data: DonationProps;
  callback: (data: DonationProps) => void;
};

export function DonateIncident() {
  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { navigate } = useNavigation();

  const { headers } = useAuth();

  const [isLoadingDonation, setLoadingDonation] = useState(false);
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const totalDonationsAmout = countTotalDonationsAmount(routeParams.donations);
  const amountMax = routeParams.cost - totalDonationsAmout;

  /**
   * Check the amount needed for donation
   * @param value - received a amount of donation
   * @returns {boolean}
   */
  const isBiggerOldAmout = function (value: number) {
    return value > amountMax;
  };

  function handleNavigateToDetailsOng() {
    navigate("DetailsOng", routeParams);
  }

  function navigateToShowIncidents() {
    navigate("ShowIncidents");
  }

  function handleOpenModalDonation() {
    setVisibleModal(true);
  }

  function handleCloseModalDonation() {
    setVisibleModal(false);
  }

  function yupValidadeDonation({
    data,
    callback,
  }: YupValidationDonationDatasProps) {
    const donationSchema = yup.object().shape({
      amount: yup
        .number()
        .min(1, "O campo quatia precisa de no mínimo R$ 0,01 caracteres")
        .required("Quantia é um campo obrigatório"),
      incident_id: yup
        .string()
        .min(3, "Não foi possível encontrar o id")
        .required("Incident Id é um campo obrigatório"),
    });

    donationSchema.cast(data);

    donationSchema
      .validate(data, { abortEarly: false })
      .then(function (response) {
        if (isBiggerOldAmout(amount)) {
          Alert.alert(
            "Falha",
            `Você só pode doar ${currency.formatted(
              String(amountMax)
            )} ou menos`
          );
          setLoadingDonation(false);
          return;
        }

        callback(response);
      })
      .catch(function (err) {
        setLoadingDonation(false);
        Alert.alert("Campos inválidos", err.errors[0]);
      });
  }

  function handleValidadeDatasDonation() {
    const data = {
      amount: amount,
      incident_id: routeParams.id,
    };

    yupValidadeDonation({
      data,
      callback: createDonation,
    });
  }

  async function createDonation(data: DonationProps) {
    setLoadingDonation(true);

    try {
      const response = await api.post("donations", data, headers);

      if (!response) {
        Alert.alert("Ops", "Não foi possível efetuar uma doação.");
        setLoadingDonation(false);
        return;
      }

      Alert.alert("Sucesso", "A doação foi efetuada com sucesso.");
      navigateToShowIncidents();
    } catch (err) {
      Alert.alert("Ops", "Ocorreu um erro inesperado ao efetuar uma doação.");
      setLoadingDonation(false);
    }
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header
          left={<ButtonGoBack />}
          right={
            <ButtonDonatedIncidents onPress={handleNavigateToDetailsOng} />
          }
        />

        <Presentation
          title="Doação"
          subtitle={"Efetue uma doação e ajude \nos incidentes :)"}
        />

        <Incident data={routeParams} />

        <Footer>
          <Title>Doação</Title>
          <ButtonWrapper>
            <Button
              title="Doar"
              color={theme.colors.darkblue}
              onPress={handleOpenModalDonation}
            />
          </ButtonWrapper>
        </Footer>

        <ModalDonation
          visible={isVisibleModal}
          closeModal={handleCloseModalDonation}
        >
          <Input
            title="Valor da doação"
            titleColor="#000000"
            style={styles.inputAmount}
            value={currency.formatted(String(amount))}
            onChangeText={(value) => setAmount(currency.unFormatted(value))}
          />

          {isLoadingDonation ? (
            <Load style={{ marginTop: 25 }} />
          ) : (
            <Button
              title="Efetuar Doação"
              color={theme.colors.green}
              onPress={handleValidadeDatasDonation}
            />
          )}
        </ModalDonation>
      </Container>
    </Background>
  );
}
