import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { InputCard } from '../../molecules/InputCard';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  ContentCard,
  Trash
} from './styles';

export type DonateProps = {
  id: string;
  incident_id: string;
  user_id: string;
  amount: number;
}

export type IncidentProps = {
  id: string;
  name: string;
  description: string;
  coast: number;
  donates: DonateProps[];
  user_id: string;
}

type Props = {
  data: IncidentProps;
  routerName: string;
  donated: boolean;
}

export function Incident({
  data,
  routerName,
  donated
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

        { !donated &&
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
          subtitle={data.coast}
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