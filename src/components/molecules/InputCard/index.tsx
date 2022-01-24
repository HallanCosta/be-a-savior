import React from 'react';
import NumberFormat from 'react-number-format';

import { 
  styles, 
  Container,
  Title,
  Subtitle
} from './styles';

type Props = {
  title: string;
  subtitle: string | number;
}

type NumberFormatProps = number;

function currencyFormat(number: NumberFormatProps) {
  return 'R$ ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function InputCard({
  title,
  subtitle
}: Props){
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>

        {typeof subtitle === "number"
          ?  
          currencyFormat(subtitle)
          :
          subtitle
        }
      </Subtitle>
    </Container>
  );
}