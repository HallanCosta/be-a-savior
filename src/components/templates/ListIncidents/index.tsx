import React from 'react';
import { FlatList } from 'react-native';

import { Incident, IncidentProps } from '../../organisms/Incident';

import { 
  styles,
  Container 
} from './styles';

type Props = {
  data: IncidentProps[];
  navigate: () => void;
}

export function ListIncidents({ data, navigate }: Props) {

  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        item.donated
        ? 
        <Container />
        :
        <Incident 
          data={item}
          navigate={navigate}
        />
      )}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
}