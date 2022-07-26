import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  styles,
  Title,
  IconBox
} from './styles';

export type Props = TouchableOpacityProps & { 
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
    <TouchableOpacity
      activeOpacity={0.8}
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
    </TouchableOpacity>
  );
}