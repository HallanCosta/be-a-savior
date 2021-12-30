import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Home } from '../screens/Ong/Home';
import { CreateIncident } from '../screens/Ong/CreateIncident';
import { MyIncidents } from '../screens/Ong/MyIncidents';
import { MyDonatedIncidents } from '../screens/Ong/MyDonatedIncidents';
import { EditIncident } from '../screens/Ong/EditIncident';
import { DetailsDonor } from '../screens/Ong/DetailsDonor';

import { theme } from '../global/styles/theme';

export function OngRoutes(){
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator 
      headerMode="none"
      screenOptions={{ 
        cardStyle: {
          backgroundColor: theme.colors.ong.background100
        } 
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="CreateIncident"
        component={CreateIncident}
      />
      <Screen 
        name="MyIncidents"
        component={MyIncidents}
      />
      <Screen 
        name="MyDonatedIncidents"
        component={MyDonatedIncidents}
      />
      <Screen 
        name="EditIncident"
        component={EditIncident}
      />
      <Screen 
        name="DetailsDonor"
        component={DetailsDonor}
      />
    </Navigator>
  );
}