import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { ButtonDonate } from '../ButtonDonate';
import { ButtonDonateEmail } from '../ButtonDonateEmail';
import { ButtonDonateCard } from '../ButtonDonateCard';
import { ButtonDonatePix } from '../ButtonDonatePix';
import { ButtonDonateWhatsapp } from '../ButtonDonateWhatsapp';

import { 
  styles,
  Container,
  Email,
  Card,
  Whatsapp,
  Pix
} from './styles';

export function ButtonsDonate(){
  return (
    <Container>
      <Email>
        <ButtonDonateEmail 
          onPress={() => alert('Email') } 
        />
      </Email>

      <Card>
        <ButtonDonateCard 
          onPress={() => alert('Catão') } 
        />
      </Card>

      <Pix>
        <ButtonDonatePix 
          onPress={() => alert('Pix') } 
        />
      </Pix>
      
      <Whatsapp>
        <ButtonDonateWhatsapp 
          onPress={() => alert('Whatsapp') } 
        />
      </Whatsapp>
    </Container>
  );
}