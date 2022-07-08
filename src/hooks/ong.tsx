import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useState
} from 'react';
import { Alert } from 'react-native';

import { IncidentProps } from '../components/organisms/Incident';
import { TotalIncidentsProps } from '../components/templates/ListIncidents';

import { api } from '../services/api';

import { useAuth } from './auth';

type OngContextData = {
  incidents: IncidentProps[];
  total: TotalIncidentsProps;
  loading: boolean;
  loadIncidents: () => void;
  setIncidents: (incidents: IncidentProps[]) => void;
}

type OngProviderProps = {
  children: ReactNode;
}

export const OngContext = createContext({} as OngContextData);

function OngProvider({ children }: OngProviderProps) {
  const { user } = useAuth();

  const [total, setTotal] = useState<TotalIncidentsProps>({} as TotalIncidentsProps);
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  function loadIncidents() {
    setLoading(true);
    console.log('> Load Incidents');
    api.get(`incidents/?ongId=${user?.id}`)
      .then(response => {
        setTotal(JSON.parse(response.headers['x-total']));
        setIncidents(response.data);
        setLoading(false);
        console.log('> Request Success');
      })
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
  }

  return (
    <OngContext.Provider value={{
      incidents,
      total,
      loading,
      loadIncidents,
      setIncidents
    }}>
      {children}
    </OngContext.Provider>
  )
}

function useOng() {
  const context = useContext(OngContext);

  return context;
}

export {
  OngProvider,
  useOng
}