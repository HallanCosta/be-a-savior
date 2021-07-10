import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { 
  styles
} from './styles';

type Props = RectButtonProps & {
  color: string;
  children: ReactNode;
}

export function ButtonLogout({
  color,
  children,
  ...rest
}: Props){
  return (
    <RectButton
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
    >
      {children}
    </RectButton>
  );
}