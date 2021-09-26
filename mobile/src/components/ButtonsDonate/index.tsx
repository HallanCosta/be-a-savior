import React from 'react';

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

export function ButtonsDonate() {
  return (
    <Container>
      <Email>
        <ButtonDonateEmail 
          autoFill={true}
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