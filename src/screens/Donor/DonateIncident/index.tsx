import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Background } from '../../../components/atoms/Background';
import { ButtonGoBack } from '../../../components/atoms/ButtonGoBack';
import { ButtonDonatedIncidents } from '../../../components/atoms/ButtonDonatedIncidents';
import { Button } from '../../../components/atoms/Button';
import { Header } from '../../../components/molecules/Header';
import { Input } from '../../../components/molecules/Input';
import { ModalDonation } from '../../../components/molecules/ModalDonation';
import { Presentation } from '../../../components/molecules/Presentation';
import { Incident, IncidentProps } from '../../../components/organisms/Incident';
import { Donation } from '../../../components/organisms/Donation';

import { countTotalDonationsAmount } from '../../../utils/incident';

import { useIncident } from '../../../hooks/incident';

import { currency } from '../../../utils/currencyFormat';

import EmailSVG from '../../../assets/icons/email.svg';
import WhatsappSVG from '../../../assets/icons/whatsapp.svg';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  ButtonWrapper,
  Footer,
  LabelDonationValue
} from './styles';

export function DonateIncident() {

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { navigate } = useNavigation();

  const { loadIncident } = useIncident();

  const [isVisibleModal, setVisibleModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [totalDonationsAmout, setTotalDonationsAmout] = useState(0);

  useEffect(
    useCallback(() => {
      setTotalDonationsAmout(
        countTotalDonationsAmount(routeParams.donations)
      );
    },[])
  );

  function handleNavigateToDetailsOng() {
    navigate('DetailsOng');
  }

  function handleOpenModalDonation() {
    setVisibleModal(true);
  }

  function handleCloseModalDonation() {
    setVisibleModal(false);
  }

  return (
    <Background gradient="donor">
      <Container>
        <Header 
          left={<ButtonGoBack />}
          right={ 
            <ButtonDonatedIncidents 
              onPress={handleNavigateToDetailsOng} 
            /> 
          }
        />

        <Presentation 
          title="Doação"
          subtitle={'Efetue uma doação e ajude \nos incidentes :)'}
        />

        <Incident 
          data={routeParams}
          accumulatedDonations={totalDonationsAmout}
        />

        <Footer>
          <ButtonWrapper>
            <Button 
              first
              icon={() => <EmailSVG />} 
              color={theme.colors.darkblue}
              onPress={handleOpenModalDonation}
            />
            <Button 
              icon={() => <WhatsappSVG />} 
              color={theme.colors.green}
              onPress={handleOpenModalDonation}
            />
          </ButtonWrapper>
        </Footer>

        <ModalDonation 
          visible={isVisibleModal}
          closeModal={handleCloseModalDonation}
        >
          <LabelDonationValue>Valor da doação</LabelDonationValue>
          <Input 
            title="Custo"
            style={styles.inputAmount}
            value={currency.formatted(String(amount))}
            onChangeText={value => setAmount(currency.unFormatted(value))}
          />
        </ModalDonation>
      </Container>
    </Background>
  );
}