import React, { useState } from "react";
import { Alert } from "react-native";

import { Load } from "../../atoms/Load";
import { Button } from "../../atoms/Button";
import { InputCard } from "../../molecules/InputCard";
import { DonationProps } from "../Incident";

import { currencyFormatBRL } from "../../../utils/currencyFormat";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

import EmailSVG from "../../../assets/icons/email.svg";
import WhatsappSVG from "../../../assets/icons/whatsapp.svg";

import { theme } from "../../../global/styles/theme";
import { styles, Container, ButtonWrapper } from "./styles";

type Props = {
  data: DonationProps;
  showContact?: Boolean;
};

export function Donation({ data, showContact = true }: Props) {
  const [loading, setLoading] = useState(false);

  function handleContactEmail() {
    Alert.alert(
      "Email",
      "Entrando em contado por email... " + data.donor.email
    );
  }

  function handleContactWhatsapp() {
    Alert.alert(
      "Whatsapp",
      "Entrando em contado por whatsapp... " + data.donor.phone
    );
  }

  return (
    <>
      {loading ? (
        <Load />
      ) : (
        <Container>
          <InputCard title="Nome do Doador" subtitle={data.donor.name} />

          <InputCard
            title="Valor doado"
            subtitle={currencyFormatBRL(data.amount)}
          />

          {showContact && (
            <ButtonWrapper>
              <Button
                first
                icon={() => <EmailSVG />}
                color={theme.colors.darkblue}
                onPress={handleContactEmail}
              />
              <Button
                icon={() => <WhatsappSVG />}
                color={theme.colors.green}
                onPress={handleContactWhatsapp}
              />
            </ButtonWrapper>
          )}
        </Container>
      )}
    </>
  );
}
