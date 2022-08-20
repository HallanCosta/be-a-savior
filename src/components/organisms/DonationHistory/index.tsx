import React from "react";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { FlatList, ViewProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { MessageError } from "../../atoms/MessageError";
import { Incident, IncidentProps } from "../../organisms/Incident";

import { InputCard } from "../../molecules/InputCard";

import { countTotalDonationsAmount } from "../../../utils/incident";
import { currencyFormatBRL } from "../../../utils/currencyFormat";

import { theme } from "../../../global/styles/theme";
import { styles, Container, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";

export type FieldProps = {
  key: string;
  title: string;
  subtitle: string;
  type: "text" | "money";
};

type Props = BorderlessButtonProps & {
  data: IncidentProps;
  fields: FieldProps[];
  showArrowRight?: boolean;
};

export function DonationHistory({
  data,
  fields,
  showArrowRight = true,
  ...rest
}: Props) {
  const { navigate } = useNavigation();

  function handleNavigateToDonationDetails() {
    navigate("DonationDetails", data);
  }

  const renderItem = {
    text: (field: FieldProps) => (
      <InputCard
        key={field.key}
        title={field.title}
        subtitle={field.subtitle}
      />
    ),
    money: (field: FieldProps) => (
      <InputCard
        key={field.key}
        title={field.title}
        subtitle={currencyFormatBRL(Number(field.subtitle))}
      />
    ),
  };

  function SwitchField(field: FieldProps) {
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

      {showArrowRight && (
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
