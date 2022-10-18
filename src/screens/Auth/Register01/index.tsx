import React, { useState } from "react";
import { Alert, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";

import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Presentation } from "../../../components/molecules/Presentation";
import { InputLogin } from "../../../components/molecules/InputLogin";
import { Button } from "../../../components/atoms/Button";
import { ContainerSquareTriangule } from "../../../components/molecules/ContainerSquareTriangule";

import { useAuth } from "../../../hooks/auth";

import { phoneFormat, UserProps } from "../../../utils/user";

import { theme } from "../../../global/styles/theme";
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  FormTitle,
  Footer,
} from "./styles";

type RenderProps = {
  key: string;
};

type ItemProps = {
  key: string;
  title: string;
  render: ({ key }: RenderProps) => JSX.Element;
};

type AbstractUser = Omit<UserProps, "email" | "password">;

type YupValidationRegisterDatasProps = {
  data: AbstractUser;
  callback: () => void;
};

export function Register01() {
  const { owner } = useAuth();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { navigate } = useNavigation();

  const renderForm = ({ key }: RenderProps) => (
    <View key={key}>
      <InputLogin
        placeholder="Seu nome"
        placeholderTextColor="#FFFFFF"
        onChangeText={setName}
      />

      <InputLogin
        placeholder="Whatsapp"
        placeholderTextColor="#FFFFFF"
        value={phoneFormat.phoneMasked(phone)}
        maxLength={15}
        onChangeText={(value) => setPhone(phoneFormat.phoneUnMasked(value))}
      />
    </View>
  );

  const items: ItemProps[] = [
    {
      key: "ong",
      title: "01. Preencha os dados da ONG",
      render: renderForm,
    },
    {
      key: "donor",
      title: "01. Preencha os seus dados",
      render: renderForm,
    },
  ];

  function navigateToRegister02() {
    navigate("Register02", {
      name,
      phone,
    });
  }

  function validateRegisterData({
    data,
    callback,
  }: YupValidationRegisterDatasProps) {
    yup.setLocale({
      mixed: {
        default: "Algum campo está inválido",
        required: "Revise os campos, pois são obrigatórios",
      },
    });

    const userSchema = yup.object().shape({
      name: yup
        .string()
        .min(3, "Forneça um nome de no mínimo ${min} caracteres")
        .required("Nome é um campo obrigatório"),
      phone: yup
        .string()
        .min(11, "Forneça um whatsapp de no mínimo ${min} caracteres")
        .required("Nome é um campo obrigatório"),
    });

    userSchema.cast(data);

    userSchema
      .validate(data, { abortEarly: false })
      .then(function (_) {
        callback();
      })
      .catch(function (err) {
        Alert.alert("Campo inválido", err.errors[0]);
      });
  }

  function handleNextStep() {
    const data = {
      name,
      phone,
    };

    const callback = navigateToRegister02;

    validateRegisterData({ data, callback });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Background gradient={owner}>
        <Container>
          <Header left={<ButtonGoBack />} />

          <Presentation
            title={"Se junte a nós e venha \nfazer a diferença!"}
            subtitle={"Basta preencher os seguintes \ndados."}
          />

          <Form>
            <FormTitle>
              {items.map(({ key, title }) => {
                return key === owner && title;
              })}
            </FormTitle>

            {items.map(({ key, render }) => {
              return key === owner && render({ key });
            })}
          </Form>

          <ContainerSquareTriangule>
            <Button
              title="Próximo"
              color={theme.colors.donor.background100}
              onPress={handleNextStep}
            />
          </ContainerSquareTriangule>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}
