import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { ButtonDonate } from '../ButtonDonate';

import { theme } from '../../global/styles/theme';
import { 
  styles,
  Title
} from './styles';

type Props = RectButtonProps & {}

export function ButtonDonatePix({
  ...rest
}: Props){
  return (
    <RectButton
      {...rest}
    >
      <ButtonDonate 
        title="Pix"
        color="green"
      />
    </RectButton>
  );
}