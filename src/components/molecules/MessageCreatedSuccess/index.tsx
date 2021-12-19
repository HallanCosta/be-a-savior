import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../atoms/Background';
import { Button } from '../../atoms/Button';

import { useAuth } from '../../../hooks/auth';

import { theme } from '../../../global/styles/theme';
import {
  styles,
  Container,
  Title,
  Content,
  Square,
  Footer
} from './styles';

type Props = {
  title: string;
}

export function MessageCreatedSuccess({ 
  title
}: Props) {
  const { owner } = useAuth();

  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate('Login');
  }

  return (
    <Background gradient={owner}>
      <Title>
        {title}
      </Title>

      <Content>
        <Square>
          <Feather 
            name="check"
            size={24}
            color={theme.colors.green}
          />
        </Square>
      </Content>


      <Footer>
        <Button 
          title="Fazer Login"
          color={theme.colors.green}
          onPress={handleNavigateToLogin}
        />
      </Footer>
    </Background>
  );
}