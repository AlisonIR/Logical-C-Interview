import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useFetchDataQuery } from '../services/api';

const PersonDetails: React.FC = () => {
  const { data, isLoading, isError } = useFetchDataQuery();

  useEffect(() => {
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Is Error:', isError);
  }, [data, isLoading, isError]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>Error: No se pudieron cargar los datos.</Text>
      </View>
    );
  }

  const person = data ? data[0] : null;

  if (!person) {
    return (
      <View style={styles.container}>
        <Text>No se encontraron datos de persona.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de la Persona</Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: person.avatar }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{person.email}</Text>
          <Text style={styles.label}>Dirección:</Text>
          <Text style={styles.text}>Calle: {person.address?.street || 'N/A'}</Text>
          <Text style={styles.text}>Ciudad: {person.address?.city || 'N/A'}</Text>
          <Text style={styles.text}>Estado: {person.address?.state || 'N/A'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 150, 
    height: 150, 
    marginRight: 20, 
  },
  textContainer: {
    flex: 1, 
  },
});

export default PersonDetails;

