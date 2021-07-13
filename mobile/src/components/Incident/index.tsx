import React from 'react';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { CardValues } from '../CardValues';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Container,
  ContentCard,
  Trash
} from './styles';

type Incident = {
  id: string;
  name: string;
  coast: string;
}

type Props = {
  data: Incident;
  handleDetailsIncident: () => void;
}

export function Incident({
  data: { name, coast },
  handleDetailsIncident
}: Props){
  return (
    <Container>
      <ContentCard>
        <CardValues 
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
        <CardValues 
          title="Valor"
          subtitle={coast}
        />


        <BorderlessButton
          onPress={handleDetailsIncident}
          style={styles.details}
        >
          <Feather 
            name="arrow-right"
            size={30}
            color={theme.colors.primaryOng100}
          />
        </BorderlessButton>
      </ContentCard>
    </Container>
  );
}