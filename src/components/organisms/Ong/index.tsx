import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Load } from '../../atoms/Load';
import { InputCard } from '../../molecules/InputCard';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import { useIncident } from '../../../hooks/incident';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  Footer
} from './styles';


export type OngProps = {
  id: string;
  name: string;
  email: string;
  phone: number;
}

type Props = {
  data: OngProps;
}

export function Ong({
  data,
}: Props){

  const { user } = useAuth();

  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);

  function handleNavigateToEditIncident() {

  }

  return (
    <>
      {
        loading
        ?
        <Load />
        :
        <Container>
          <InputCard 
            title="Nome da Ong"
            subtitle={data.name}
          />

          <InputCard 
            title="Email"
            subtitle={data.email}
          />

          <InputCard 
            title="Telefone"
            subtitle={String(data.phone)}
          />


        </Container>
      }
    </>
  );
}