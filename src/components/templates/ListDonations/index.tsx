import React from "react";

import { IncidentProps } from "../../organisms/Incident";
import { DonationCard } from "../../organisms/DonationCard";

import { InputFieldProps } from "../../../utils/incident";

import { styles, Container } from "./styles";
import { FlatList } from "react-native";

type Props = {
  data: IncidentProps[];
  viewDonation: boolean;
};

export function ListDonations({ data, viewDonation }: Props) {
  function renderItem(item: IncidentProps) {
    const renderSubItem = item.donations.map((donation) => {
      const fields: InputFieldProps[] = [
        {
          key: "1",
          title: "Nome do Incidente",
          subtitle: item.name,
          type: "text",
        },
        {
          key: "2",
          title: "Quantia doada",
          subtitle: String(donation.amount),
          type: "money",
        },
      ];

      return (
        <DonationCard
          key={donation.id}
          incident={item}
          donation={donation}
          fields={fields}
          viewDonation={viewDonation}
        />
      );
    });

    return <>{renderSubItem}</>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => renderItem(item)}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
}
