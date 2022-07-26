import React, { useCallback, useEffect, useState } from 'react';
import { Text, Linking, Alert } from 'react-native';
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
import { currency } from '../../../utils/currencyFormat';

import { api } from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import { useDonor } from '../../../hooks/donor';

import EmailSVG from '../../../assets/icons/email.svg';
import WhatsappSVG from '../../../assets/icons/whatsapp.svg';

import { theme } from '../../../global/styles/theme';
import { 
  styles,
  Container,
  ButtonWrapper,
  Footer
} from './styles';

type DonationTypeProps = 'email' | 'whatsapp' | '';

export function DonateIncident() {

  const route = useRoute();
  const routeParams = route.params as IncidentProps;

  const { navigate } = useNavigation();

  const { user, headers } = useAuth();
  const { loadOwnerIncident } = useDonor();

  const [isVisibleModal, setVisibleModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [totalDonationsAmout, setTotalDonationsAmout] = useState(0);
  const [donationType, setDonationType] = useState<DonationTypeProps>('');

  useEffect(
    useCallback(() => {
      setTotalDonationsAmout(
        countTotalDonationsAmount(routeParams.donations)
      );
    },[])
  );

  const isBiggerCost = function(value: number) {
    return value > routeParams.cost;
  }

  function handleNavigateToDetailsOng() {
    navigate('DetailsOng');
  }

  function handleOpenModalDonation() {
    setVisibleModal(true);
  }

  function handleCloseModalDonation() {
    setDonationType('');
    setVisibleModal(false);
  }

  function handleCreateDonation() {
    Alert.alert('SendMessageEmail', donationType);

    const data = {
      amount: amount,
      incident_id: routeParams.id
    }

    handleMessageAfterDonation();

    /* api.post('donations', data, headers)
      .then(response => handleMessageAfterDonation)
      .catch(err => Alert.alert('Ops!', 'Não foi possível fazer uma doação.')); */
  }

  function handleSetDonationEmail() {
    setDonationType('email');
    handleOpenModalDonation();
  }
  
  function handleSetDonationWhatsapp() {
    setDonationType('whatsapp');
    handleOpenModalDonation();
  }

  async function handleMessageAfterDonation() {
    // const ownerIncident = await loadOwnerIncident(routeParams.id);
    const ownerIncident = {
      phone: '18997676538'
    }

    switch (donationType) {
      case 'email':
        await Linking.openURL(`mailto:hallex.costa1@hotmail.com?subject=Assunto Predefinido&body=Olá, meu nome é ${user?.name} e gostaria de fazer uma doação para o incidente ${routeParams.id}`);
        break;
      case 'whatsapp':
        await Linking.openURL(`https://wa.me/+55${ownerIncident.phone}?text=Olá, meu nome é ${user?.name} e gostaria de fazer uma doação para o incidente ${routeParams.id}`);
        break;
      default:
        console.log(`Sorry, we are out of ${donationType}.`);
    }
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
              onPress={handleSetDonationEmail}
            />
            <Button 
              icon={() => <WhatsappSVG />} 
              color={theme.colors.green}
              onPress={handleSetDonationWhatsapp}
            />
          </ButtonWrapper>
        </Footer>

        <ModalDonation 
          visible={isVisibleModal}
          closeModal={handleCloseModalDonation}
        >
          <Input
            title="Valor da doação" 
            titleColor="#000000"
            style={styles.inputAmount}
            value={currency.formatted(String(amount))}
            onChangeText={value => setAmount(currency.unFormatted(value))}
          />

          <Button
            title="Efetuar Doação"
            color={theme.colors.green}
            onPress={handleCreateDonation}
          />
        </ModalDonation>
      </Container>
    </Background>
  );
}