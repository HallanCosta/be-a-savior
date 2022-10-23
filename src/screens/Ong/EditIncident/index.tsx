import React, { useCallback, useState } from "react";
import { Alert } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import { Load } from "../../../components/atoms/Load";
import { Background } from "../../../components/atoms/Background";
import { Button } from "../../../components/atoms/Button";
import { ButtonGoBack } from "../../../components/atoms/ButtonGoBack";
import { Header } from "../../../components/molecules/Header";
import { Input } from "../../../components/molecules/Input";
import { TextArea } from "../../../components/molecules/TextArea";
import { Presentation } from "../../../components/molecules/Presentation";
import {
  DonationProps,
  IncidentProps,
} from "../../../components/organisms/Incident";

import { currency } from "../../../utils/currencyFormat";
import {
  validateIncidentDatas,
  NewIncidentProps,
  countTotalDonationsAmount,
  isEquivalentObject,
  loadIncident,
  updateIncident,
} from "../../../utils/incident";

import { api } from "../../../services/api";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import {
  styles,
  KeyboardAvoidingView,
  Container,
  Form,
  DonationAccumulateds,
  DonationAccumulatedsAmount,
  Footer,
} from "./styles";

type EditIncidentProps = Omit<IncidentProps, "user_id">;

export function EditIncident() {
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as EditIncidentProps;

  const { headers } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(1);
  const [loading, setLoading] = useState(false);
  const [updateCount, setUpdateCount] = useState(0);

  const totalDonationsAmount = countTotalDonationsAmount(routeParams.donations);

  useFocusEffect(
    useCallback(() => {
      setName(routeParams.name);
      setDescription(routeParams.description);
      setCost(routeParams.cost);
    }, [])
  );

  const alreadyWasDonated = function (donations: DonationProps[]) {
    const totalAmount = countTotalDonationsAmount(donations);
    return routeParams.cost === totalAmount;
  };

  const isEqualIncidentFetched = function (
    incidentFetched: IncidentProps,
    incident: NewIncidentProps
  ): boolean {
    const newIncidentFetched = {
      name: incidentFetched.name,
      description: incidentFetched.description,
      cost: incidentFetched.cost,
    };

    return isEquivalentObject(newIncidentFetched, incident);
  };

  function handleNavigateToMyIncidents() {
    navigate("MyIncidents");
  }

  async function validadeUpdateIncident(data: NewIncidentProps) {
    setLoading(true);

    try {
      const incidentFetched = await loadIncident(routeParams.id);

      const { donations } = incidentFetched;

      if (alreadyWasDonated(donations)) {
        Alert.alert(
          "Incidente já doado",
          "Esse incidente acabou de atingir o limite de doações, portanto, não foi possível edita-lo."
        );
        handleNavigateToMyIncidents();
      } else if (isEqualIncidentFetched(incidentFetched, data)) {
        Alert.alert(
          "Não atualizado",
          "Os dados não teve alteração, portanto, não foi possível atualiza-lo."
        );
        setLoading(false);
      } else {
        const response = await updateIncident({
          id: routeParams.id,
          data,
          headers,
        });

        if (!response) {
          Alert.alert("Ops", "Não foi possível alterar o incidente");
          return;
        }

        Alert.alert("Sucesso", "O incidente foi atualizado com sucesso!");
        handleNavigateToMyIncidents();
      }
    } catch (err) {
      Alert.alert("Ops", "Ocorreu um erro inesperado ao alterar o incidente");
      setLoading(false);
    }
  }

  function handleUpdateButton() {
    validateIncidentDatas({
      name,
      description,
      cost,
      donations: routeParams.donations,
      action: "update",
      callback: validadeUpdateIncident,
    });
  }

  return (
    <KeyboardAvoidingView>
      <Background gradient="ong">
        {loading ? (
          <Load />
        ) : (
          <Container>
            <Header left={<ButtonGoBack />} />

            <Presentation title="Editar incidente" />

            <Form>
              <Input title="Incidente" value={name} onChangeText={setName} />

              <TextArea
                title="Descrição"
                value={description}
                multiline
                onChangeText={setDescription}
              />

              <Input
                title="Custo"
                value={currency.formatted(String(cost))}
                onChangeText={(value) => setCost(currency.unFormatted(value))}
              />
            </Form>

            <DonationAccumulateds>
              Doações acumuladas:{" "}
              <DonationAccumulatedsAmount>
                {currency.formatted(String(totalDonationsAmount))}
              </DonationAccumulatedsAmount>
            </DonationAccumulateds>

            <Footer>
              <Button
                title="Atualizar"
                color={theme.colors.save}
                onPress={handleUpdateButton}
              />
            </Footer>
          </Container>
        )}
      </Background>
    </KeyboardAvoidingView>
  );
}
