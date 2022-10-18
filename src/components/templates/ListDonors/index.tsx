import React from "react";

import { DonationProps } from "../../organisms/Incident";
import { DonorCard } from "../../organisms/DonorCard";

import { styles, Container } from "./styles";

type Props = {
  data: DonationProps[];
  viewContact?: boolean;
};

export function ListDonors({ data, viewContact = false }: Props) {
  return (
    <Container>
      {data.map((item, index) => (
        <DonorCard key={index} data={item} viewContact={viewContact} />
      ))}
    </Container>
  );
}
