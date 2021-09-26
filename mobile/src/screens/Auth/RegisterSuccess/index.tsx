import React from 'react';
import { MessageCreatedSuccess } from '../../../components/MessageCreatedSuccess';

import { useAuth } from '../../../hooks/auth';

import {
  styles,
  Container
} from './styles';

type ItemProps = {
  key: string;
  title: string;
}

export function RegisterSuccess() {
  const { owner } = useAuth();

  const items: ItemProps[] = [
    {
      key: 'ong',
      title: 'ONG críada \ncom sucesso!'
    },
    {
      key: 'donor',
      title: 'Agora você é \num doador!'
    }
  ]

  return (
    <MessageCreatedSuccess 
      title={ String(items.find(({ key }) => key === owner)?.title)  }
    />
  );
}