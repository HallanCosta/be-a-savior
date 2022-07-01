import React from 'react';
import { FlatList } from 'react-native';

import { MessageError } from '../../atoms/MessageError';
import { Incident, IncidentProps, DonateProps } from '../../organisms/Incident';

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

  const isEqual = function(value1: number, value2: number) {
    return value1 === value2;
  }

  const countTotalDonationsAmount = function(donations: DonateProps[]) {
    return donations.reduce((prev, curr) => prev + curr.amount, 0);
  }

  const hasIncident = function() {
    return total.totalIncidents !== 0;
  }

  const hasIncidentDonation = function() {
    return total.totalDonations !== 0;
  } 

  /**
   * verifica se um incidente tem uma doação completa.
   * @param incidents Incidents[]
   * @returns boolean
   */
  const hasOneIncidentDonationComplete = function(incidents: IncidentProps[]) {
    let incidentDonationsComplete: boolean[] = [];
  
    for (const { name, cost, donations } of incidents) {
      const incidentAmountDonations = countTotalDonationsAmount(donations);

      let donation = false
      if (cost === incidentAmountDonations) donation = true
      
      incidentDonationsComplete.push(donation)

      console.log('Nome: ' + name + ' | ' + 'Incidente: ' + cost, '| Doação: ' + incidentAmountDonations + ' Completo: ' + donation);
    }

    return incidentDonationsComplete.some(donated => donated === true);
  }

  /**
   * verifica se todos os incidentes tem a doação completa.
   * @param incidents Incidents[]
   * @returns boolean
   */
  const hasAllIncidentDonationComplete = function(incidents: IncidentProps[]) {
    let incidentDonationsComplete: boolean[] = [];
  
    for (const { name, cost, donations } of incidents) {
      const incidentAmountDonations = countTotalDonationsAmount(donations);

      let donation = false
      if (cost === incidentAmountDonations) donation = true
      
      incidentDonationsComplete.push(donation)

      console.log('Nome: ' + name + ' | ' + 'Incidente: ' + cost, '| Doação: ' + incidentAmountDonations + ' Completo: ' + donation);
    }

    return incidentDonationsComplete.every(donated => donated === true);
  }
  
  const incidentsDonateds = () => {
    function renderItem(incident: IncidentProps) {
      const { donations } = incident;
      const totalDonationsAmount = countTotalDonationsAmount(donations);
      
      if (!isEqual(totalDonationsAmount, incident.cost)) 
        return <Container />;

      return (
        <Incident 
          data={incident}
          routerName={routerName}
          showTrash={showTrash}
        />
      );
    } 

    if (!hasIncidentDonation()) 
      return <MessageError message="Você não registrou nenhum incidentes" />
    else if (!hasOneIncidentDonationComplete(data)) 
      return <MessageError message="Nenhum incidente foi doado ainda" />
    else 
      return (
        <FlatList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderItem(item)}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
      );
  };

  const incidentsNonDonateds = () => {
    function renderItem(incident: IncidentProps) {
      const { donations } = incident;
      const totalDonationsAmount = countTotalDonationsAmount(donations);

      if (isEqual(totalDonationsAmount, incident.cost)) 
        return <Container />;

      return (
        <Incident 
          data={incident}
          routerName={routerName}
          showTrash={showTrash}
        />
      );
    }

    if (!hasIncident()) 
      return <MessageError message="Você não registrou nenhum incidentes" />
    else if (hasAllIncidentDonationComplete(data))
      return <MessageError message="Todos os incidentes já foram doados" />
    else 
      return (
        <FlatList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => renderItem(item)}
          contentContainerStyle={{ paddingBottom: 70 }}
        />
      );
  };

  return donated ? incidentsDonateds() : incidentsNonDonateds();
}