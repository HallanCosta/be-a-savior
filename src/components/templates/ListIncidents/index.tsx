import React from 'react';
import { FlatList } from 'react-native';

import { MessageError } from '../../atoms/MessageError';
import { Incident, IncidentProps } from '../../organisms/Incident';

import { 
  styles,
  Container
} from './styles';

export type TotalIncidentsProps = {
  totalIncidents: number;
  totalIncidentsDonated: number;
  totalIncidentsNonDonated: number;
  totalDonations: number;
}

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
    console.log(total);
    
    const dummyIncident: IncidentProps = {
      id: "e72aec86-133b-41d6-947a-8879f133adc6",
      name: "Crocolido amassado",
      user_id: "338ce628-83b1-4fa9-b336-bf5a3e665bd8",
      cost: 3200,
      description: "ele entrou em choque com um carro",
      donations: [
        {
          amount: 10000,
          id: "d324c42d-7a88-4feb-92b4-45d54c776240",
          incident_id: "e72aec86-133b-41d6-947a-8879f133adc6",
          user_id: "a5941bbf-13b7-4ab4-b1ca-84caa31369d9",
        },
      ],
    }

    function calculateTotalDonationAmount(item: IncidentProps): Number {
      let totalDonations = 0;
      item.donations.map(donation => {
        totalDonations = donation.amount + totalDonations;
      });
      console.log('Total donations >', totalDonations);
      return totalDonations;
    }
    console.log(calculateTotalDonationAmount(dummyIncident));

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

            calculateTotalDonationAmount(item) === 0
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