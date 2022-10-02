import React, { useState } from "react";
import { Platform, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../../components/atoms/Background";
import { Button } from "../../../components/atoms/Button";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Input } from "../../../components/molecules/Input";
import { TextArea } from "../../../components/molecules/TextArea";
import { Header } from "../../../components/molecules/Header";
import { Presentation } from "../../../components/molecules/Presentation";
import { IncidentProps } from "../../../components/organisms/Incident";

import { currency } from "../../../utils/currencyFormat";
import {
  validateIncidentDatas,
  NewIncidentProps,
} from "../../../utils/incident";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  Footer,
} from "./styles";
import { Load } from "../../../components/atoms/Load";

export function CreateIncident() {
  const { headers } = useAuth();

  const { navigate } = useNavigation();

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);

  function handleNavigateToHome() {
    navigate("Home");
  }

  function successRequest() {
    Alert.alert("Sucesso", "Incidente cadastrado com sucesso");
    setLoading(false);
    handleNavigateToHome();
  }

  function failedRequest() {
    Alert.alert("Ops!", "Não foi possível salvar o incidente.");
    setLoading(false);
  }

  function handleSaveIncident(data: NewIncidentProps) {
    setLoading(true);
    api
      .post("incidents", data, headers)
      .then((response) => successRequest())
      .catch((err) => failedRequest());
  }

  function handleSaveButton() {
    validateIncidentDatas({
      name,
      description,
      cost,
      action: "create",
      callback: handleSaveIncident,
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background gradient="ong">
        <Container>
          <Header left={<ButtonGoBack />} />

          <Presentation title="Crie um incidente" />

          {isLoading ? (
            <Load style={{ marginTop: 120 }} />
          ) : (
            <>
              <Form>
                <Input title="Nome" value={name} onChangeText={setName} />
                <TextArea
                  title="Descrição"
                  value={description}
                  onChangeText={setDescription}
                />
                <Input
                  title="Custo"
                  value={currency.formatted(String(cost))}
                  onChangeText={(value) => setCost(currency.unFormatted(value))}
                />
              </Form>

              <Footer>
                <Button
                  title="Salvar"
                  color={theme.colors.save}
                  onPress={handleSaveButton}
                />
              </Footer>
            </>
          )}
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}
