import React, { ReactNode } from 'react';

import { OwnerProps, useAuth } from '../../../hooks/auth';

import {
  styles,
  Container
} from './styles';

export type ItemProps = {
  key: string;
  render: () => JSX.Element;
}

type Props = {
  data: ItemProps[];
}

export function ItemAuth({ data }: Props) {
  const { owner } = useAuth();
  const ownerSerialized = owner as Exclude<OwnerProps, 'guest'>

  return data.find(({ key }) => key === ownerSerialized)?.render() as JSX.Element;
}