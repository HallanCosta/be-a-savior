import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../../global/styles/theme';
import { 
  styles
} from './styles';

type Props = RectButtonProps & {
  gradient: 'ong' | 'donor' | 'guest';
}

export function ButtonLogout({
  gradient,
  ...rest
}: Props){
  const colorsBackground = {
    ong() {
      const { background80, background90 } = theme.colors.ong;
      return [background80, background90];
    },
    donor() {
      const { background80, background90 } = theme.colors.donor;
      return [background80, background90];
    },
    guest() {
      const { background80, background90 } = theme.colors.guest;
      return [background80, background90];
    }
  };

  const gradientBackgroundColors = colorsBackground[gradient];

  return (
    <RectButton
      style={styles.button}
      onPress={() => alert('Sair')}
      {...rest}
    >
      <LinearGradient
        style={[styles.container]}
        colors={gradientBackgroundColors()}
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