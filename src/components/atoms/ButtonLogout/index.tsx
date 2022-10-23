import React, { ReactNode } from "react";
import { Alert } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../../global/styles/theme";
import { styles } from "./styles";

import { useAuth } from "../../../hooks/auth";

type Props = RectButtonProps & {};

export function ButtonLogout({ ...rest }: Props) {
  const { owner, signOut } = useAuth();

  const colorsBackground = {
    ong() {
      const { background70, background80 } = theme.colors.ong;
      return [background70, background80];
    },
    donor() {
      const { background80, background90 } = theme.colors.donor;
      return [background80, background90];
    },
    guest() {
      const { background80, background90 } = theme.colors.guest;
      return [background80, background90];
    },
  };

  const gradientBackgroundColors = colorsBackground[owner];

  function messageLogout() {
    Alert.alert("", `Você deseja realmente sair do app?`, [
      {
        text: "Sim",
        style: "default",
        onPress: signOut,
      },
      {
        text: "Não",
        style: "default",
      },
    ]);
  }

  return (
    <RectButton style={styles.container} onPress={messageLogout} {...rest}>
      <LinearGradient
        style={styles.button}
        colors={gradientBackgroundColors.call(null)}
      >
        <Feather name="power" size={20} color="#fff" />
      </LinearGradient>
    </RectButton>
  );
}
