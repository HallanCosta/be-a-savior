import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../../global/styles/theme';
import { 
  styles
} from './styles';

export type Props = {
  children: ReactNode;
  gradient: 'ong' | 'donor' | 'guest';
}

export function Background({ 
  children,
  gradient
}: Props) {

  const colorsBackground = {
    ong() {
      const { background100, background80 } = theme.colors.ong;
      return [background100, background80];
    },
    donor() {
      const { background100, background80 } = theme.colors.donor;
      return [background100, background80];
    },
    guest() {
      const { background100, background80 } = theme.colors.guest;
      return [background100, background80];
    }
  };
  console.log(colorsBackground['ong']);
  const gradientBackgroundColors = colorsBackground[gradient];
        
  return (
    <LinearGradient 
      style={{ flex: 1 }}
      colors={gradientBackgroundColors()}
    >
      {children}
    </LinearGradient>
  );
}