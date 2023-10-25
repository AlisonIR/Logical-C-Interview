import React from 'react';
import { View, Text, Button } from 'react-native';
import { useFetchDataQuery } from '../services/api';
import { Data } from '../types/types';

const PersonList: React.FC = ({ navigation }: any) => {
  const { data, isFetching } = useFetchDataQuery();
  console.log(data)
  if (isFetching) {
    return <Text>Cargando...</Text>;
  }

  if (!data) {
    return null;
  }

  return (
    <View>
      <Text>Lista de Personas</Text>
      <View>
        {data.map((person: Data, index: number) => (
          <View key={index}>
            <Button
              title={person.name.title + ' ' + person.name.first + ' ' + person.name.last}
              onPress={() => navigation.navigate('PersonDetails', { person })}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PersonList;








