import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { Load } from '../../../components/atoms/Load';
import { Header } from '../../../components/molecules/Header';
import { Presentation } from '../../../components/molecules/Presentation';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { ListIncidents } from '../../../components/templates/ListIncidents';

import { useIncidents } from '../../../hooks/incidents';

import { 
  styles,
  Container
} from './styles';

export function ShowIncidents() {
  const { total, loading, incidents, loadIncidents } = useIncidents();

  const { navigate } = useNavigation();

  // const incidents = [
  //   {
  //     id: '1',
  //     name: 'Gatinho sofreu um acidente na estrada.',
  //     coast: 'R$ 120,00',
  //     description: 'Um gatinho filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     donated: true
  //   },
  //   {
  //     id: '2',
  //     name: 'Cachorro sofreu um acidente na estrada.',
  //     coast: 'R$ 120,00',
  //     description: 'Um cachorro filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     donated: false
  //   },
  //   {
  //     id: '3',
  //     name: 'Jacaré sofreu um acidente na estrada.',
  //     description: 'Um jacaré filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     coast: 'R$ 320,00',
  //     donated: true
  //   },
  //   {
  //     id: '4',
  //     name: 'Gorila sofreu um acidente na estrada.',
  //     description: 'Um gorila filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     coast: 'R$ 500,00',
  //     donated: false
  //   },
  //   {
  //     id: '5',
  //     name: 'Rato sofreu um acidente na estrada.',
  //     description: 'Um rato filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     coast: 'R$ 10,00',
  //     donated: true
  //   },
  //   {
  //     id: '6',
  //     name: 'Peixe sofreu um acidente na estrada.',
  //     description: 'Um peixe filhote foi atropelado e está gravimente ferido, suas condições é de estado grave. Por favor peço a sua ajuda.',
  //     coast: 'R$ 20,00',
  //     donated: false
  //   }
  // ];

  return (
    <Background gradient="donor">
      <Header 
        left={<ButtonGoBack />}
      />

      <Presentation 
        title="Incidentes"
        subtitle={'Aqui você encontra todos \nos casos das ONGs.'}
      />

      {/* <ListIncidents 
        data={incidents} 
        routerName="DonateIncident"
      /> */}

      { 
        loading
        ?
        <Load />
        :
        <ListIncidents 
          routerName="DonateIncident" 
          data={incidents} 
          total={total}
          donated={false}
          showTrash={true}
        />
      }
    </Background>
  );
}