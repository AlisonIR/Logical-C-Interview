import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
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
      const lowerSearchTerm = searchTerm.toLowerCase();
      const filtered = data.filter((person) => {
        const personName = person.name?.toLowerCase() || '';
        const personCity = (person.address?.city || '').toLowerCase();
        const personState = (person.address?.state || '').toLowerCase();

        return (
          personName.includes(lowerSearchTerm) ||
          personCity.includes(lowerSearchTerm) ||
          personState.includes(lowerSearchTerm)
        );
      });
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error: No se pudieron cargar los datos.</Text>;
  }

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar onSearchTermChange={handleSearch} />
      {filteredData.map((person: Data, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('PersonDetails')}
          style={styles.personContainer}
        >
          <Image source={{ uri: person.avatar }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textName}>Name: {person.name || 'N/A'}</Text>
            <Text style={styles.textPhone}>Phone Number: {person.phoneNumber || 'N/A'}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  personContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  textName: {
    fontSize: 17,
    fontWeight: '600',
  },
  textPhone: {
    fontSize: 14,
    color: 'grey',
  },
});

export default PersonList;












