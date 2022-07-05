import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

export function ButtonGoBack() {
  const { goBack } = useNavigation();

  function handleNavigateToGoBack() {
    goBack();
  }

  return (
    <BorderlessButton
      onPress={handleNavigateToGoBack}
      style={styles.container}
    >
      <Feather 
        name="arrow-left"
        size={30}
        color="#fff"
      />
    </BorderlessButton>
  );
}