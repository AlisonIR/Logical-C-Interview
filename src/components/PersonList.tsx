import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useFetchDataQuery } from '../services/api';
import { Data } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import  SearchBar  from '../components/SearchBar';

const PersonList: React.FC = () => {
  const { data, isLoading, isError } = useFetchDataQuery();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Is Error:', isError);
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error: No se pudieron cargar los datos.</Text>;
  }

  return (
    <View>
      <SearchBar/>
      {data?.map((person: Data, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('PersonDetails')}
        >
          <Image
            source={{ uri: person.avatar }}
            style={{ width: 100, height: 100 }} 
          />
          <Text>Name: {person.name}</Text>
          <Text>Phone Number: {person.phoneNumber}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PersonList;






