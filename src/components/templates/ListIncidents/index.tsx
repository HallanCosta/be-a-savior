import React from 'react';
import { FlatList } from 'react-native';

import { Incident, IncidentProps, DonateProps } from '../../organisms/Incident';

import { 
  styles,
  Container 
} from './styles';

type Props = {
  data: IncidentProps[];
  routerName: string;
  donates?: DonateProps[];
}

export function ListIncidents({ 
  data,
  routerName, 
  donates = []
}: Props) {

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        item.donates.length > 0
        ? 
        <Incident 
          data={item}
          routerName={routerName}
          donated={true}
        />
        :
        <Container />
      )}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
}