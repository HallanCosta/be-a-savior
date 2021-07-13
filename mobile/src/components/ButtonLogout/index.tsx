import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { Background } from '../Background';

import { theme } from '../../global/styles/theme';
import { 
  styles
} from './styles';

export function ButtonLogout({
  ...rest
}: RectButtonProps){
  const { primaryOng80, primaryOng90 } = theme.colors;

  return (
    <RectButton
      style={styles.button}
      onPress={() => alert('Sair')}
      {...rest}
    >
      <LinearGradient
        style={[styles.container]}
        colors={[primaryOng80, primaryOng90]}
      >
        <Feather 
          name="power"
          size={20}
          color="#fff"
        />
      </LinearGradient>
    </RectButton>
  );
}