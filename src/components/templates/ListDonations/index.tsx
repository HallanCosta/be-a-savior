import React from "react";

import { DonationProps } from "../../../components/organisms/Incident";
import { Donation } from "../../../components/organisms/Donation";

import { styles, Container } from "./styles";

type Props = {
  data: DonationProps[];
  showContact?: boolean;
};

export function ListDonations({ data, showContact = true }: Props) {
  return (
    <Container>
      {data.map((item, index) => (
        <Donation key={index} data={item} showContact={showContact} />
      ))}
    </Container>
  );
}
