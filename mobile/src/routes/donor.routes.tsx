import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../screens/Doner/Home';

import { theme } from '../global/styles/theme';

export function DonorRoutes(){
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: theme.colors.donor.background100
        } 
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}