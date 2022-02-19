import React from 'react';
import { FlatList } from 'react-native';

import { MessageError } from '../../atoms/MessageError';
import { Incident } from '../../organisms/Incident';

import { TotalIncidentsProps, IncidentProps } from '../../../hooks/ong';

import { 
  styles,
  Container
} from './styles';

type Props = {
  data: IncidentProps[];
  total: TotalIncidentsProps;
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