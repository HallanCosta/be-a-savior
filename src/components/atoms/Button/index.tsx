import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {
  styles,
  Container,
  Title,
  IconBox
} from './styles';

export type Props = RectButtonProps & { 
  first?: boolean;
  color: string;
  title?: string;
  icon?: () => JSX.Element;
}

export function Button({
  first = false,
  color,
  title,
  icon: Icon = () => (<></>),
  ...rest
}: Props){
  return (
    <RectButton
      style={[
        styles.container, 
        { backgroundColor: color },
        first ? { marginRight: 50 } : {}
      ]}
      {...rest}
    >    
      <Title color={color}>
        {title}
      </Title>

      <IconBox>
        <Icon />
      </IconBox>
    </RectButton>
  );
}