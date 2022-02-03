import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Load } from '../../atoms/Load';
import { Incident, IncidentProps } from '../../organisms/Incident';

import { MessageError } from '../../atoms/MessageError';

import { 
  styles,
  Container
} from './styles';

type Props = {
  data: IncidentProps[];
  routerName: string;
  donated: boolean;
}
export function ListIncidents({ 
  data,
  routerName, 
  donated
}: Props) {

  const [totalIncidents, setTotalIncidents] = useState(0);
  const [totalIncidentsNonDonateds, setTotalIncidentsNonDonateds] = useState(0);
  const [totalIncidentsDonateds, setTotalIncidentsDonateds] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const totalIncidents = data.map(incident => incident.id);
    
    const donations = data.map(incident => incident.donations.length > 0);
    const totalIncidentsNonDonateds = donations.filter(donation => donation === false);
    const totalIncidentsDonateds = donations.filter(donation => donation === true);

    setTotalIncidents(totalIncidents.length);
    setTotalIncidentsNonDonateds(totalIncidentsNonDonateds.length);
    setTotalIncidentsDonateds(totalIncidentsDonateds.length);

    setLoading(false);
  }, []);

  /**
   * 
   * 
- Pegar total de incidentes

- Pegar total de incidentes que tem doação

- Pegar total de incidentes que não tem doação


Tela de incidentes não doados:
- Usar o (total de incidentes) para verificar se tem incidentes não doados. Se tiver incidente imprimi o incident, se não lança mensagem de erro
- Usar o (total de incidentes que tem doação) para verifica se tem incidentes. Se tiver incidente com doação lança mensagem de erro, se não não faça nada.
   */


  // const incidentsDonateds = () => (
  //   <FlatList 
  //     data={data}
  //     keyExtractor={item => item.id}
  //     renderItem={({ item }) => {
  //       if (item.donations.length > 0) {
  //         return (
  //           <Incident 
  //             data={item}
  //             routerName={routerName}
  //             showTrash={false}
  //           />
  //         )
  //       } else {
  //         return <Container />
  //       }
  //     }}
  //     contentContainerStyle={{ paddingBottom: 70 }}
  //   />
  // );


  /**
   * 


{ // usário com todos incidentes doados
  "email": "hallan.ong@hotmail.com",
  "password": "hallan123"
}

{ // usuário sem incidente
  "email": "ong3@ong.com",
  "password": "ong"
}
   * 
   */
  const incidentsDonateds = () => {
    if (loading)
      return <Load />
    else if (totalIncidents === 0) 
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
              showTrash={false}
            />
            :
            <Container />
          )}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
      );
  };

  const incidentsNonDonateds = () => {
    if (loading)
      return <Load />
    else if (totalIncidents === 0) 
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
              showTrash={true}
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