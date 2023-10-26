import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Data } from '../types/types';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { useFetchDataQuery } from '../services/api';

const PersonList: React.FC = () => {
  const navigation = useNavigation();
  const { data, isLoading, isError } = useFetchDataQuery();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<Data[]>([]);

  useEffect(() => {
    if (data) {
      // Filtrar los datos en función del término de búsqueda
      const filtered = data.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error: No se pudieron cargar los datos.</Text>;
  }

  const handleSearch = () => {
    // La búsqueda se realiza en tiempo real a medida que el usuario ingresa el término
    // No es necesario realizar una nueva petición a la API
    // Los datos ya están en el estado local
  };

  return (
    <View>
      <SearchBar onSearchTermChange={setSearchTerm} onSearch={handleSearch} />
      {filteredData.map((person: Data, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('PersonDetails')}
        >
          <Image source={{ uri: person.avatar }} style={styles.image} />
          <Text style={styles.textName}>Name: {person.name}</Text>
          <Text>Phone Number: {person.phoneNumber}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '600',
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: 'grey',
  },
});

export default PersonList;





