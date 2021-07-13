import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { 
  styles
} from './styles';

export type Props = {
  children: ReactNode;
}

export function Background({ 
  children
}: Props){
  const { primaryOng100, primaryOng80 } = theme.colors;
  return (
    <LinearGradient 
      style={{ flex: 1 }}
      colors={[primaryOng100, primaryOng80]}
    >
      {children}
    </LinearGradient>
  );
}