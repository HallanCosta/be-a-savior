import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../../screens/Ong/Home';
import { CreateIncident } from '../../screens/Ong/CreateIncident';
import { ListIncidents } from '../../screens/Ong/ListIncidents';
import { DetailsIncident } from '../../screens/Ong/DetailsIncident';

import { theme } from '../../global/styles/theme';

export function AppOngRoutes(){
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: theme.colors.primaryOng100
        } 
      }}
    >
      <Screen 
        name="OngHome"
        component={Home}
      />
      <Screen 
        name="CreateIncident"
        component={CreateIncident}
      />
      <Screen 
        name="ListIncidents"
        component={ListIncidents}
      />
      <Screen 
        name="DetailsIncident"
        component={DetailsIncident}
      />
    </Navigator>
  );
}