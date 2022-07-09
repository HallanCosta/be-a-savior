import { Alert } from 'react-native'; 
import * as yup from 'yup';

import { DonationProps, IncidentProps } from '../components/organisms/Incident';

type EquivalentObjectProps = {
    [key: string]: any
}

export type OmmitValidationIncidentProps = Omit<IncidentProps, "id"|"donations"|"user_id">

type YupValidationIncidentDatasProps = {
    name: string;
    description: string;
    cost: number;
    action: (data: OmmitValidationIncidentProps) => void;
}

export const countTotalDonationsAmount = function(donations: DonationProps[]) {
    return donations.reduce((prev, curr) => prev + curr.amount, 0);
}
  
export function isEquivalentObject(a: EquivalentObjectProps, b: EquivalentObjectProps) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName: string = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

export function validateIncidentDatas({ 
    name, 
    description, 
    cost,
    action
}: YupValidationIncidentDatasProps) {
    const incident = {
      name,
      description,
      cost
    };

    yup.setLocale({
      mixed: {
        default: 'Algum campo está inválido',
        required: 'Revise os campos, pois são obrigatórios'
      },
      number: {
        min: 'Deve ser igual ou maior que ${min}',
      },
    });

    const incidentSchema = yup.object().shape({
      name: yup.string()
        .min(5, 'O campo nome precisa de no mínimo ${min} caracteres')
        .required('Nome é um campo obrigatório'),
        description: yup.string()
        .min(8, 'Forneça uma descrição detalhada do incidente, o campo descrição precisa de no mínimo ${min} caracteres')
        .required('Descrição é um campo obrigatório'),
      cost: yup.number()
        .min(1, 'Deve ser igual ou maior que R$ 0,01')
        .required('Custo é um campo obrigatório'),
    });

    incidentSchema.cast(incident);

    incidentSchema.validate(incident, { abortEarly: false })
      .then(function(data) {
        Alert.alert('Sucesso', 'O incidente foi cadastrado com sucesso.');
        action(data);
      })
      .catch(function (err) {
        Alert.alert('Campos inválidos', err.errors[0]);
      });
  }