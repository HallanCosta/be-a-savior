import React from "react";
import { ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import homeImg from "../../../assets/images/home.png";

import { useAuth, OwnerProps } from "../../../hooks/auth";

import { Portrait } from "../../../components/atoms/Portrait";

import {
  styles,
  Container,
  Content,
  Number,
  Information,
  Footer,
  ButtonText,
} from "./styles";

export function Home() {
  const { setOwner } = useAuth();

  const { navigate } = useNavigation();

  function handleNavigateToLanding(owner: OwnerProps) {
    setOwner(owner);
    navigate("Landing");
  }

  return (
    <ScrollView>
      <Container>
        <Portrait img={homeImg} />

        <Content>
          <Information>
            <Number>01. </Number>
            Crie uma ONG e venha se juntar a nós.
          </Information>
          <Information>
            <Number>02. </Number>
            Ajude vários casos de maneira super rápida.
          </Information>
          <Information>
            <Number>03. </Number>
            Seja um doador fiel e vire um salvador.
          </Information>
        </Content>

        <Footer>
          <RectButton
            onPress={() => handleNavigateToLanding("ong")}
            style={[styles.button, styles.buttonOng]}
          >
            <ButtonText ong>ONG</ButtonText>
          </RectButton>

          <RectButton
            onPress={setOwner.bind(null, "guest")}
            style={[styles.button, styles.buttonGuest]}
          >
            <ButtonText>Visitante</ButtonText>
          </RectButton>

          <RectButton
            onPress={() => handleNavigateToLanding("donor")}
            style={[styles.button, styles.buttonDonor]}
          >
            <ButtonText>Doador</ButtonText>
          </RectButton>
        </Footer>
      </Container>
    </ScrollView>
  );
}
