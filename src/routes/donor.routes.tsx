import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Donor/Home";
import { DonationsHistory } from "../screens/Donor/DonationsHistory";
import { DonationDetails } from "../screens/Donor/DonationDetails";
import { ShowIncidents } from "../screens/Donor/ShowIncidents";
import { DonateIncident } from "../screens/Donor/DonateIncident";
import { DetailsOng } from "../screens/Donor/DetailsOng";

import { theme } from "../global/styles/theme";

export function DonorRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.donor.background100,
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="DonationsHistory" component={DonationsHistory} />
      <Screen name="DonationDetails" component={DonationDetails} />
      <Screen name="ShowIncidents" component={ShowIncidents} />
      <Screen name="DonateIncident" component={DonateIncident} />
      <Screen name="DetailsOng" component={DetailsOng} />
    </Navigator>
  );
}
