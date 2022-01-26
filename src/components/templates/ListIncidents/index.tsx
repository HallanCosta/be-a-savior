import React from 'react';
import { FlatList } from 'react-native';

import { Incident, IncidentProps } from '../../organisms/Incident';

import { 
  styles,
  Container 
} from './styles';

type Props = {
  data: IncidentProps[];
  routerName: string;
}

export function ListIncidents({ 
  data,
  routerName, 
}: Props) {

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        item.donations.length > 0
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