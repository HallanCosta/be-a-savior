import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { InputCard } from '../../molecules/InputCard';

import { currencyFormat } from '../../../utils/currencyFormat';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  ContentCard,
  Trash
} from './styles';

type DonateProps = {
  id: string;
  incident_id: string;
  user_id: string;
  amount: number;
}

export type IncidentProps = {
  id: string;
  name: string;
  description: string;
  cost: number;
  donations: DonateProps[];
  user_id: string;
}

type Props = {
  data: IncidentProps;
  routerName: string;
  showTrash: boolean;
}

export function Incident({
  data,
  routerName,
  showTrash
}: Props){
  const { navigate } = useNavigation();

  function handleNavigateToEditIncident() {
    navigate(routerName, data);
  }

  return (
    <Container>
      <ContentCard>
        <InputCard 
          title="Incidente"
          subtitle={data.name}
        />

        { showTrash &&
          <Trash>
            <Feather 
              name="trash-2"
              size={24}
              color='#C54747'
              />  
          </Trash>
        }
      </ContentCard>
      
      <ContentCard>
        <InputCard 
          title="Valor"
          subtitle={currencyFormat(data.cost)}
        />

        <BorderlessButton
          onPress={handleNavigateToEditIncident}
          style={styles.details}
        >
          <Feather 
            name="arrow-right"
            size={30}
            color={theme.colors.ong.background100}
          />
        </BorderlessButton>
      </ContentCard>
    </Container>
  
  );
}