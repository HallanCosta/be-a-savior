import React, { useState } from "react";
import { Linking } from "react-native";

import { Button } from "../../atoms/Button";
import { InputCard } from "../../molecules/InputCard";
import { DonationProps } from "../Incident";

import { currencyFormatBRL } from "../../../utils/currencyFormat";

import EmailSVG from "../../../assets/icons/email.svg";
import WhatsappSVG from "../../../assets/icons/whatsapp.svg";

import { theme } from "../../../global/styles/theme";
import { styles, Container, ButtonWrapper } from "./styles";
import { useAuth } from "../../../hooks/auth";

type Props = {
  data: DonationProps;
  viewContact?: Boolean;
};

export function DonorCard({ data, viewContact = true }: Props) {
  const { user } = useAuth();

  function handleSendEmail() {
    Linking.openURL(
      `mailto:${data.donor.email}?subject=Agreadeço pela doação&body=Olá, eu sou a ong (${user.name}) e estou entrando em contato através do app <b>Be a Savior</b> para agradecer sua doação :D`
    );
  }

  function handleSendWhatsapp() {
    Linking.openURL(
      `https://api.whatsapp.com/send/?phone=55${data.donor.phone}&text=Olá, eu sou a ong (${user.name}) e estou entrando em contato através do app *Be a Savior* para agradecer sua doação :D&type=phone_number&app_absent=0`
    );
  }

  return (
    <Container>
      <InputCard title="Nome do Doador" subtitle={data.donor.name} />

      <InputCard
        title="Quantia doada"
        subtitle={currencyFormatBRL(data.amount)}
      />

      {viewContact && (
        <ButtonWrapper>
          <Button
            first
            icon={() => <EmailSVG />}
            color={theme.colors.darkblue}
            onPress={handleSendEmail}
          />
          <Button
            icon={() => <WhatsappSVG />}
            color={theme.colors.green}
            onPress={handleSendWhatsapp}
          />
        </ButtonWrapper>
      )}
    </Container>
  );
}
