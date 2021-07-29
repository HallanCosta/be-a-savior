import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../screens/Doner/Home';
import { ShowIncidents } from '../screens/Doner/ShowIncidents';
import { DonateIncident } from '../screens/Doner/DonateIncident';
import { DetailsOng } from '../screens/Doner/DetailsOng';

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
      <Screen 
        name="ShowIncidents"
        component={ShowIncidents}
      />
      <Screen 
        name="DonateIncident"
        component={DonateIncident}
      />
      <Screen 
        name="DetailsOng"
        component={DetailsOng}
      />
    </Navigator>
  );
}