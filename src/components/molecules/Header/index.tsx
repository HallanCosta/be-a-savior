import React, { ReactNode } from "react";

import { styles, Container, SpaceBlank } from "./styles";

type Props = {
  left?: ReactNode;
  right?: ReactNode;
};

export function Header({ left, right }: Props) {
  return (
    <Container>
      {left ? left : <SpaceBlank />}

      {right ? right : <SpaceBlank />}
    </Container>
  );
}
