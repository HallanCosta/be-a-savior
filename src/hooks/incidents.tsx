import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useEffect, 
  useState
} from 'react';
import { Alert } from 'react-native';

import { IncidentProps } from '../components/organisms/Incident';
import { TotalIncidentsProps } from '../components/templates/ListIncidents';

import { api } from '../services/api';

import { useAuth } from './auth';

type IncidentsContextData = {
  incidents: IncidentProps[];
  total: TotalIncidentsProps;
  loading: boolean;
  loadIncidents: () => void;
  setIncidents: (incidents: IncidentProps[]) => void;
}

type IncidentsProviderProps = {
  children: ReactNode;
}

export const IncidentsContext = createContext({} as IncidentsContextData);

function IncidentsProvider({ children }: IncidentsProviderProps) {

  const { user, owner } = useAuth();

  const [total, setTotal] = useState<TotalIncidentsProps>({} as TotalIncidentsProps);
  const [incidents, setIncidents] = useState<IncidentProps[]>([]);
  const [loading, setLoading] = useState(true);

  function loadIncidents() {
    setLoading(true);
    console.log('> Load Incidents...');
    api.get(`incidents/?ong_id=${user?.id}`)
      .then(response => {
        setTotal(JSON.parse(response.headers['x-total']));
        setIncidents(response.data);
        setLoading(false);
        /*console.log(response.data.reduce(function(prev: IncidentProps, curr: IncidentProps) {
          return curr.donations.map(({ amount }) => amount )
        }, 0)); */
        console.log('> Request Success');
      })
      .catch(err => Alert.alert('Oops', 'Ocorreu um erro ao buscar os incidentes'));
  }

  return (
    <IncidentsContext.Provider value={{
      incidents,
      total,
      loading,
      loadIncidents,
      setIncidents
    }}>
      {children}
    </IncidentsContext.Provider>
  )
}

function useIncidents() {
  const context = useContext(IncidentsContext);

  return context;
}

export {
  IncidentsProvider,
  useIncidents
}