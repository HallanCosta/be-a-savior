import React from "react";

import { InputCard } from "../../molecules/InputCard";

import { UserResponse, phoneFormat } from "../../../utils/user";

import { useAuth } from "../../../hooks/auth";

import { theme } from "../../../global/styles/theme";
import { styles, Container } from "./styles";

type Props = {
  data: UserResponse;
};

export function UserCard({ data }: Props) {
  const { owner } = useAuth();

  const name = owner === "ong" ? "Nome do Doador" : "Nome da Ong";

  return (
    <Container>
      <InputCard title={name} subtitle={data.name} />

      <InputCard title="Email" subtitle={data.email} />

      <InputCard
        title="Telefone"
        subtitle={phoneFormat.phoneMasked(String(data.phone))}
      />
    </Container>
  );
}
