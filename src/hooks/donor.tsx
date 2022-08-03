import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useState
} from 'react';
import { Alert } from 'react-native';

import { OngProps } from '../components/organisms/Ong';
import { IncidentProps } from '../components/organisms/Incident';
import { TotalIncidentsProps } from '../components/templates/ListIncidents';

import { api } from '../services/api';

import { useAuth } from './auth';

type DonorContextData = {
  loading: boolean;
  loadOng: (userId: string) => Promise<OngProps>;
  total: TotalIncidentsProps;
}

type DonorProviderProps = {
  children: ReactNode;
}

export const DonorContext = createContext({} as DonorContextData);

function DonorProvider({ children }: DonorProviderProps) {
  const [total, setTotal] = useState<TotalIncidentsProps>({} as TotalIncidentsProps);
  const [loading, setLoading] = useState(true);

  async function loadOng(userId: string) {
    console.log('> Load Ong from Incident');
    setLoading(true);
    
    const response = await api.get(`ongs/${userId}`)

    if (!response) Alert.alert('Ops', 'Ocorreu um erro ao buscar a ong desse incidente');

    setTotal(JSON.parse(response.headers['x-total']));
    setLoading(false);
    return response.data;
  }

  return (
    <DonorContext.Provider value={{
      total,
      loading,
      loadOng,
    }}>
      {children}
    </DonorContext.Provider>
  )
}

function useDonor() {
  const context = useContext(DonorContext);

  return context;
}

export {
  DonorProvider,
  useDonor
}