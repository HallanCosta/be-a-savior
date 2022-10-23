import React, { useState } from "react";
import { Platform, View, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as yup from "yup";

import { Load } from "../../../components/atoms/Load";
import { Background } from "../../../components/atoms/Background";
import { Header } from "../../../components/molecules/Header";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Presentation } from "../../../components/molecules/Presentation";
import { InputLogin } from "../../../components/molecules/InputLogin";
import { Button } from "../../../components/atoms/Button";
import { ContainerSquareTriangule } from "../../../components/molecules/ContainerSquareTriangule";

import { UserProps } from "../../../utils/user";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

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
  button: ({ key }: RenderProps) => JSX.Element;
  render: ({ key }: RenderProps) => JSX.Element;
};

type RouteParams = {
  name: string;
  phone: string;
};

type YupValidationRegisterDatasProps = {
  data: UserProps;
  callback: () => void;
};

export function Register02() {
  const { owner } = useAuth();

  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { navigate } = useNavigation();

  const formRender = ({ key }: RenderProps) => (
    <View key={key}>
      <InputLogin
        placeholder="Email"
        placeholderTextColor="#FFFFFF"
        onChangeText={setEmail}
      />

      <InputLogin
        secureTextEntry
        placeholder="Senha"
        placeholderTextColor="#FFFFFF"
        onChangeText={setPassword}
      />

      <InputLogin
        secureTextEntry
        placeholder="Confirmar senha"
        placeholderTextColor="#FFFFFF"
        onChangeText={setPasswordConfirm}
      />
    </View>
  );

  const items: ItemProps[] = [
    {
      key: "ong",
      title: "02. Email e Senha",
      button: ({ key }: RenderProps) => (
        <Button
          key={key}
          title="Concluir"
          color={theme.colors.save}
          onPress={hadleCompleteRegister}
        />
      ),
      render: formRender,
    },
    {
      key: "donor",
      title: "02. Email e Senha",
      button: ({ key }: RenderProps) => (
        <Button
          key={key}
          title="Concluir"
          color={theme.colors.save}
          onPress={hadleCompleteRegister}
        />
      ),
      render: formRender,
    },
  ];

  function successRequest() {
    setLoading(false);
    navigate("RegisterSuccess");
  }

  function failedRequest() {
    setLoading(false);
    Alert.alert("Ops", "Não foi possível efetuar seu cadastro");
  }

  function createUser(data: UserProps) {
    setLoading(true);

    api
      .post(`${owner}s`, data)
      .then((response) => successRequest())
      .catch((err) => failedRequest());
  }

  function validateRegisterData({
    data,
    callback,
  }: YupValidationRegisterDatasProps) {
    const newData = {
      ...data,
      passwordConfirm,
    };

    yup.setLocale({
      mixed: {
        default: "Algum campo está inválido",
        required: "Revise os campos, pois são obrigatórios",
      },
    });

    const userSchema = yup.object().shape({
      email: yup
        .string()
        .email("Forneça um email válido")
        .required("Email é um campo obrigatório"),
      password: yup
        .string()
        .min(3, "Forneça uma senha de no mínimo ${min} caracteres")
        .required("Senha é um campo obrigatório"),
      passwordConfirm: yup
        .string()
        .min(3, "Forneça uma senha de no mínimo ${min} caracteres")
        .test("passwords-match", "As senhas deve ser iguais", function (_) {
          return this.parent.password === passwordConfirm;
        }),
    });

    userSchema.cast(newData);

    userSchema
      .validate(data, { abortEarly: false })
      .then(function (_) {
        callback();
      })
      .catch(function (err) {
        Alert.alert("Campo inválido", err.errors[0]);
      });
  }

  function hadleCompleteRegister() {
    const data = {
      name: routeParams.name,
      phone: routeParams.phone,
      email,
      password,
    };

    const callback = () => createUser(data);

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
            title={"Precisamos de alguns \nmeios de contatos \nseus."}
          />

          {isLoading ? (
            <Load style={{ marginTop: 100 }} />
          ) : (
            <>
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
                {items.map(({ key, button }) => {
                  return key === owner && button({ key });
                })}
              </ContainerSquareTriangule>
            </>
          )}
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}
