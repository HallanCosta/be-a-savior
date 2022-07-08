import React from 'react';
import { View } from 'react-native';

import { IncidentProps, DonationProps } from '../../../components/organisms/Incident';
import { Donation } from '../../../components/organisms/Donation';

import { 
  styles,
  Container
} from './styles';

type Props = {
  data: DonationProps[];
}

export function ListDonations({ data }: Props) {
  return (
    <Container>
      {
        data.map((item, index) => ( 
          <Donation key={index} data={item} />
        ))
      }
    </Container>
  );
}