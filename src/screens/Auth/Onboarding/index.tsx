import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import onboardingImg from '../../../assets/images/onboarding.png'

import { useAuth, OwnerProps } from '../../../hooks/auth';

// import { Header } from '../../../components/Header';
import { Portrait } from '../../../components/Portrait';

import {
  styles,
  Container,
  Content,
  Number,
  Information,
  Footer,
  Ong,
  OngText,
  Guest,
  GuestText,
  Donor,
  DonorText
} from './styles';

export function Onboarding(){
  const { navigate } = useNavigation();

  const { setOwner } = useAuth();

  function handleNavigateToLanding(owner: OwnerProps) {
    setOwner(owner);
    
    navigate('Landing');
  }

  return (
    <ScrollView>
      <Container>
        {/* <Header /> */}

        <Portrait img={onboardingImg} />

        <Content>
          <Number>01.</Number>
          <Information>Crie uma ONG e venha se juntar a nós.</Information>
        </Content>
        <Content>
          <Number>02.</Number>
          <Information>Ajude vários casos de maneira super rápida.</Information>
        </Content>
        <Content>
          <Number>03.</Number>
          <Information>Seja um doador fiel e vire um salvador.</Information>
        </Content>

        <Footer>
          <Ong>
            <RectButton
              onPress={() => handleNavigateToLanding('ong')}
            >
              <OngText>
                ONG
              </OngText>
            </RectButton>
          </Ong>

          <Guest>
            <RectButton
              onPress={() => alert('Ir direto para listagem de incidentes')}
            >
              <GuestText>
                Visitante
              </GuestText>
            </RectButton>
          </Guest>

          <Donor>
            <RectButton
              onPress={() => handleNavigateToLanding('donor')}
            >
              <DonorText>
                Doador
              </DonorText>
            </RectButton>
          </Donor>
        </Footer>
      </Container>
    </ScrollView>
  );
}