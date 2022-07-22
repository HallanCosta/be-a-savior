import React, { ReactNode } from 'react';
import { 
  Modal, 
  ModalProps, 
  TouchableWithoutFeedback 
} from 'react-native';

import { 
  Container,
  Overlay,
  Background,
  Bar,
  Content
} from './styles';

type Props = ModalProps & {
  children: ReactNode;
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
      <TouchableWithoutFeedback
        onPress={closeModal}
      >
        <Overlay>
          <Container>
            <Background>
              <Bar />

              <Content>{children}</Content>
            </Background>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
