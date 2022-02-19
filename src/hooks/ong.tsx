import React, 
{ 
  createContext,
  ReactNode,
  useContext, 
  useEffect, 
  useState
} from 'react';
import { Alert } from 'react-native';

import { api } from '../services/api';

import { useAuth } from './auth';

export type TotalIncidentsProps = {
  totalIncidents: number;
  totalIncidentsDonated: number;
  totalIncidentsNonDonated: number;
  totalDonations: number;
}

export type DonateProps = {
  id: string;
  incident_id: string;
  user_id: string;
  amount: number;
}

export type IncidentProps = {
  id: string;
  name: string;
  description: string;
  cost: number;
  donations: DonateProps[];
  user_id: string;
}

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

  // useEffect(() => {
  //   console.log('> Ong Hook');

  //   (async function() {
  //     await loadIncidents();
  //   })();
  // }, []);

  function loadIncidents() {
    setLoading(true);
    console.log('> Load Incidents');
    api.get(`incidents/?ong_id=${user?.id}`)
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