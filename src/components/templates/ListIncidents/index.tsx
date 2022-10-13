import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { FlatList, ViewProps } from "react-native";

import {
  ActionProps,
  Incident,
  IncidentProps,
  Ref,
} from "../../organisms/Incident";

import { styles, Container } from "./styles";

type Props = ViewProps & {
  data: IncidentProps[];
  action?: ActionProps;
  editIncident?: boolean;
  deleteIncident?: boolean;
  viewIncident?: boolean;
};

export const ListIncidents = forwardRef<Ref, Props>((props, _ref) => {
  const { editIncident, viewIncident, deleteIncident, data, action } = props;

  const childStateRef = useRef<Ref>({} as Ref);

  const getChildState = () => {
    const childCurrentState = childStateRef.current as Ref;
    const childState = childCurrentState.getIncidentId();

    return childState;
  };

  useImperativeHandle(_ref, () => ({
    getIncidentId: () => {
      return getChildState();
    },
  }));

  function renderItem(incident: IncidentProps) {
    return (
      <Incident
        ref={childStateRef}
        data={incident}
        action={action}
        editIncident={editIncident}
        deleteIncident={deleteIncident}
        viewIncident={viewIncident}
      />
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
      contentContainerStyle={{ paddingBottom: 70 }}
    />
  );
});
