import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { ShowIncidents } from '../screens/Guest/ShowIncidents';

import { theme } from '../global/styles/theme';

export function GuestRoutes(){
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: theme.colors.guest.background100
        } 
      }}
    >
      <Screen 
        name="ShowIncidents"
        component={ShowIncidents}
      />
    </Navigator>
  );
}