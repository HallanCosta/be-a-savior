import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DonatedIncidentsSVG from '../../../assets/icons/DonatedIncidents.svg';

import { 
  styles,
  Container
} from './styles';

export function ButtonDonatedIncidents({
  ...rest
}: RectButtonProps){
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <DonatedIncidentsSVG />
    </RectButton>
  );
}