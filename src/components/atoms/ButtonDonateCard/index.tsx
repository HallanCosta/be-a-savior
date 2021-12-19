import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { ButtonDonate } from '../ButtonDonate';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Title
} from './styles';

type Props = RectButtonProps & {
  autoFill?: boolean;
}

export function ButtonDonateCard({
  autoFill,
  ...rest
}: Props){
  return (
    <RectButton
      {...rest}
    >
      <ButtonDonate 
        title="Cartão"
        color="red"
        buttonDonatePrimary={autoFill}
      />
    </RectButton>
  );
}