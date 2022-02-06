import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { MessageError } from '../../atoms/MessageError';
import { Incident, IncidentProps } from '../../organisms/Incident';

import { 
  styles,
  Container
} from './styles';

export type TotalProps = {
  totalIncidents: number;
  totalIncidentsDonated: number;
  totalIncidentsNonDonated: number;
  totalDonations: number;
}

type Props = {
  data: IncidentProps[];
  total: TotalProps;
  routerName: string;
  donated: boolean;
  showTrash: boolean;
}
export function ListIncidents({ 
  data,
  total,
  routerName, 
  donated,
  showTrash
}: Props) {

  const incidentsDonateds = () => {
    if (total.totalIncidents === 0) 
      return <MessageError message="Não à incidentes doados. Você não registrou nenhum incidentes" />
    else if (total.totalIncidentsDonated === 0) 
      return <MessageError message="Nenhum incidente foi doado ainda" />
    else 
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
              showTrash={showTrash}
            />
            :
            <Container />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
      );
  };

  const incidentsNonDonateds = () => {
    if (total.totalIncidents === 0) 
      return <MessageError message="Você não registrou nenhum incidentes" />
    else if (total.totalIncidentsNonDonated === 0) 
      return <MessageError message="Todos os incidentes já foram doados" />
    else 
      return (
        <FlatList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
           item.donations.length === 0
            ?
            <Incident 
              data={item}
              routerName={routerName}
              showTrash={showTrash}
            />
            :
            <Container />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
      );
  };

  return donated ? incidentsDonateds() : incidentsNonDonateds();
}