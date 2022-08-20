import React from "react";
import { FlatList } from "react-native";

import { Incident, IncidentProps } from "../../organisms/Incident";

import { styles, Container } from "./styles";
import { DonationHistory, FieldProps } from "../../organisms/DonationHistory";

type Props = {
  data: IncidentProps[];
};

export function ListDonationsHistory({ data }: Props) {
  function renderItem(item: IncidentProps) {
    const renderFields: FieldProps[] = [
      {
        key: "1",
        title: "Nome do Incidente",
        subtitle: item.name,
        type: "text",
      },
      {
        key: "2",
        title: "Custo",
        subtitle: String(item.cost),
        type: "money",
      },
    ];

    return <DonationHistory key={item.id} data={item} fields={renderFields} />;
  }

  return <>{data.map((incident) => renderItem(incident))}</>;
}
