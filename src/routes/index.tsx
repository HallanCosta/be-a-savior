import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { OngRoutes } from "./ong.routes";
import { DonorRoutes } from "./donor.routes";
import { GuestRoutes } from "./guest.routes";
import { AuthRoutes } from "./auth.routes";

import { AuthProvider, useAuth } from "../hooks/auth";

export function Routes() {
  const { owner, isLogged } = useAuth();

  switch (owner) {
    case "ong":
      console.log("> Ong route");
      return (
        <NavigationContainer>
          {isLogged ? <OngRoutes /> : <AuthRoutes />}
        </NavigationContainer>
      );
    case "donor":
      console.log("> Donor route");
      return (
        <NavigationContainer>
          {isLogged ? <DonorRoutes /> : <AuthRoutes />}
        </NavigationContainer>
      );
    case "guest":
      console.log("> Guest route");
      return (
        <NavigationContainer>
          <GuestRoutes />
        </NavigationContainer>
      );
    default:
      console.log("> Auth route");
      return (
        <NavigationContainer>
          <AuthRoutes />
        </NavigationContainer>
      );
  }
}
