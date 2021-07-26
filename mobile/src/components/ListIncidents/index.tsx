import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Incident, IncidentProps } from '../Incident';

import { 
  styles,
  Container 
} from './styles';

type Props = {
  data: IncidentProps[];
}

export function ListIncidents({ data }: Props){
  const { navigate } = useNavigation();

  function handleNavigateToDetailsIncident() {
    navigate('EditIncident');
  }

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
          handleDetailsIncident={handleNavigateToDetailsIncident}
        />
      )}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
}