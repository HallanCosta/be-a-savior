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
  donated?: boolean;
}

export function ListIncidents({ 
  data, 
  routerName, 
  donated = false
}: Props) {

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        donated === item.donated
        ? 
        <Incident 
          data={item}
          routerName={routerName}
          donated={donated}
        />
        :
        <Container />
      )}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
}