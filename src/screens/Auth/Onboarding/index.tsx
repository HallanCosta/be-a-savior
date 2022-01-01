import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import onboardingImg from '../../../assets/images/onboarding.png'

import { useAuth, OwnerProps } from '../../../hooks/auth';

// import { Header } from '../../../components/Header';
import { Portrait } from '../../../components/atoms/Portrait';

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
  const { setOwner } = useAuth();
  
  const { navigate } = useNavigation();

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
          <Information>
            <Number>01. </Number>
            Crie uma ONG e venha se juntar a nós.
          </Information>
          <Information>
            <Number>02. </Number>
            Ajude vários casos de maneira super rápida.
          </Information>
          <Information>
            <Number>03. </Number>
            Seja um doador fiel e vire um salvador.
          </Information>
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