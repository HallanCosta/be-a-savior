import React, { ReactNode } from "react";

import { styles, Container, SpaceBlank, Title } from "./styles";

type Props = {
  left?: ReactNode;
  title?: string;
  right?: ReactNode;
};

export function Header({ title, left, right }: Props) {
  return (
    <Container>
      {left ? left : <SpaceBlank />}

      {title ? <Title>{title}</Title> : <SpaceBlank />}

      {right ? right : <SpaceBlank />}
    </Container>
  );
}
