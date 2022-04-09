import React from 'react';
import { View } from 'react-native';
import { MessageCreatedSuccess } from '../../../components/molecules/MessageCreatedSuccess';

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
  ];

  return (
    <>
      {
        items.map(({ key, title }) => { 
          return key === owner && <MessageCreatedSuccess key={key} title={title} />
        })
      }
    </>
  )
}