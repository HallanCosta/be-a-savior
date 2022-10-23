import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { DonationProps, IncidentProps } from "../Incident";

import { InputCard } from "../../molecules/InputCard";

import { InputFieldProps } from "../../../utils/incident";
import { currencyFormatBRL } from "../../../utils/currencyFormat";

import { theme } from "../../../global/styles/theme";
import { styles, Container, Content } from "./styles";

type Props = BorderlessButtonProps & {
  incident: IncidentProps;
  donation: DonationProps;
  fields: InputFieldProps[];
  viewDonation?: boolean;
};

export function DonationCard({
  incident,
  donation,
  fields,
  viewDonation = false,
  ...rest
}: Props) {
  const { navigate } = useNavigation();

  function handleNavigateToDonationDetails() {
    navigate("DonationDetails", {
      incident,
      donation,
    });
  }

  const renderItem = {
    text: (field: InputFieldProps) => (
      <InputCard
        key={field.key}
        title={field.title}
        subtitle={field.subtitle}
      />
    ),
    money: (field: InputFieldProps) => (
      <InputCard
        key={field.key}
        title={field.title}
        subtitle={currencyFormatBRL(Number(field.subtitle))}
      />
    ),
  };

  function SwitchField(field: InputFieldProps) {
    switch (field.type) {
      case "text":
        return renderItem.text(field);
      case "money":
        return renderItem.money(field);
      default:
        console.log(`Desculpe, nós não encontramos esse tipo ${field.type}.`);
    }
  }

  return (
    <Container>
      {fields.map((field) => SwitchField(field))}

      {viewDonation && (
        <Content>
          <BorderlessButton
            onPress={handleNavigateToDonationDetails}
            style={{ position: "absolute", top: -45, right: 10 }}
          >
            <Feather
              name="arrow-right"
              size={30}
              color={theme.colors.ong.background100}
            />
          </BorderlessButton>
        </Content>
      )}
    </Container>
  );
}
