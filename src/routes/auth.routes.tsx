import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';

import { Onboarding } from '../screens/Auth/Onboarding';
import { Landing } from '../screens/Auth/Landing';
import { Login } from '../screens/Auth/Login';
import { Register01 } from '../screens/Auth/Register01';
import { Register02 } from '../screens/Auth/Register02';
import { Register03 } from '../screens/Auth/Register03';
import { RegisterSuccess } from '../screens/Auth/RegisterSuccess';

import { theme } from '../global/styles/theme';

export function AuthRoutes(){
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
        name="Onboarding"
        component={Onboarding}
      />
      <Screen 
        name="Landing"
        component={Landing}
      />
      <Screen 
        name="Login"
        component={Login}
      />
      <Screen 
        name="Register01"
        component={Register01}
      />
      <Screen 
        name="Register02"
        component={Register02}
      />
      <Screen 
        name="RegisterSuccess"
        component={RegisterSuccess}
      />
    </Navigator>
  );
}