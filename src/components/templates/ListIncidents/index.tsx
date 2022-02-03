import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { MessageError } from '../../atoms/MessageError';
import { Incident, IncidentProps } from '../../organisms/Incident';

import { 
  styles,
  Container
} from './styles';

type Props = {
  data: IncidentProps[];
  routerName: string;
  donated: boolean;
  showTrash: boolean;
}
export function ListIncidents({ 
  data,
  routerName, 
  donated,
  showTrash
}: Props) {

  const [totalIncidents, setTotalIncidents] = useState(0);
  const [totalIncidentsNonDonateds, setTotalIncidentsNonDonateds] = useState(0);
  const [totalIncidentsDonateds, setTotalIncidentsDonateds] = useState(0);

  useEffect(() => {
    const totalIncidents = data.map(incident => incident.id);
    
    const donations = data.map(incident => incident.donations.length > 0);
    const totalIncidentsNonDonateds = donations.filter(donation => donation === false);
    const totalIncidentsDonateds = donations.filter(donation => donation === true);

    setTotalIncidents(totalIncidents.length);
    setTotalIncidentsNonDonateds(totalIncidentsNonDonateds.length);
    setTotalIncidentsDonateds(totalIncidentsDonateds.length);
  }, []);

  const incidentsDonateds = () => {
    if (totalIncidents === 0) 
      return <MessageError message="Não à incidentes doados. Você não registrou nenhum incidentes" />
    else if (totalIncidentsDonateds === 0) 
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
    if (totalIncidents === 0) 
      return <MessageError message="Você não registrou nenhum incidentes" />
    else if (totalIncidentsNonDonateds === 0) 
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