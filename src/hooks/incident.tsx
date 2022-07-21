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

type IncidentContextData = {
  incidents: IncidentProps[];
  total: TotalIncidentsProps;
  loading: boolean;
  loadIncidents: () => void;
  loadIncident: (id: string) => Promise<IncidentProps>;
  setIncidents: (incidents: IncidentProps[]) => void;
}

type IncidentProviderProps = {
  children: ReactNode;
}

export const IncidentContext = createContext({} as IncidentContextData);

function IncidentProvider({ children }: IncidentProviderProps) {
  const { user, headers } = useAuth();

  const [total, setTotal] = useState<TotalIncidentsProps>({} as TotalIncidentsProps);
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  function loadIncidents() {
    setLoading(true);
    console.log('> Load Incidents');
    api.get(`incidents`)
      .then(response => {
        setTotal(JSON.parse(response.headers['x-total']));
        setIncidents(response.data);
        setLoading(false);
        console.log('> Request Success');
      })
      .catch(err => Alert.alert('Ops', 'Ocorreu um erro ao buscar os incidentes'));
  }

  async function loadIncident(id: string): Promise<IncidentProps> {
    const response = await api.get(`incidents/${id}`, headers)
    
    if (!response) {
      Alert.alert('Ops', 'Ocoreu um erro ao buscar o incidente.');
    }

    return response.data;
  }

  return (
    <IncidentContext.Provider value={{
      incidents,
      total,
      loading,
      loadIncidents,
      loadIncident,
      setIncidents
    }}>
      {children}
    </IncidentContext.Provider>
  )
}

function useIncident() {
  const context = useContext(IncidentContext);

  return context;
}

export {
  IncidentProvider,
  useIncident
}