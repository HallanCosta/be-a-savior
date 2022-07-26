import React, { ReactNode } from 'react';
import { 
  Modal, 
  ModalProps, 
} from 'react-native';

import { 
  styles,
  Container,
  Overlay,
  Bar,
  Content
} from './styles';

type Props = ModalProps & {
  children?: ReactNode;
  closeModal: () => void;
}

export function ModalDonation({
  closeModal,
  children,
  ...rest
}: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <Overlay onPress={closeModal} />

      <Container>
        <Bar />

        <Content>
          {children}
        </Content>
      </Container>
    </Modal>
  );
}
