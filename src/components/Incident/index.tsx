import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { InputCard } from '../InputCard';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Container,
  ContentCard,
  Trash
} from './styles';

export type IncidentProps = {
  id: string;
  name: string;
  coast: string;
  donated: boolean
}

type Props = {
  data: IncidentProps;
  navigate: () => void;
}

export function Incident({
  data: { name, coast, donated },
  navigate
}: Props){
  return (
    <Container>
      <ContentCard>
        <InputCard 
          title="Incidente"
          subtitle={name}
        />

        <Trash>
          <Feather 
            name="trash-2"
            size={24}
            color='#C54747'
          />  
        </Trash>
      </ContentCard>
      
      <ContentCard>
        <InputCard 
          title="Valor"
          subtitle={coast}
        />


        <BorderlessButton
          onPress={navigate}
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