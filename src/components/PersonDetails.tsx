import React from 'react';
import { View, Text } from 'react-native';

const PersonDetails: React.FC = ({ route }: any) => {
  const person = route.params.person;

  return (
    <View>
      <Text>Detalles de la Persona</Text>
      <Text>Género: {person.gender}</Text>
    </View>
  );
};

export default PersonDetails;
