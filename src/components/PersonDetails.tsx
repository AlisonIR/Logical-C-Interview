import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useFetchDataQuery } from '../services/api';


const PersonDetails: React.FC = () => {
  const { data, isLoading, isError } = useFetchDataQuery();

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

 
  const person = data[0]; 
  if (!person) {
    return <Text>No se encontraron datos de persona.</Text>;
  }

  return (
    <View>
      <Text>Email: {person.email}</Text>
      <Text>Address:</Text>
      <Text>Street: {person.address?.street || 'N/A'}</Text>
      <Text>City: {person.address?.city || 'N/A'}</Text>
      <Text>State: {person.address?.state || 'N/A'}</Text>
    </View>
  );
};

export default PersonDetails;


