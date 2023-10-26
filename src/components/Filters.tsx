import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Data } from '../types/types';
import { useFetchDataQuery } from '../services/api';

const Filters: React.FC = () => {
  const { data, isLoading, isError } = useFetchDataQuery();
  const [filteredData, setFilteredData] = useState<Data[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedPerson, setSelectedPerson] = useState<Data | null>(null);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((person) => {
        const city = person.address?.city || 'N/A';
        const state = person.address?.state || 'N/A';
        return (
          (selectedCity === '' || city.toLowerCase() === selectedCity.toLowerCase()) &&
          (selectedState === '' || state.toLowerCase() === selectedState.toLowerCase())
        );
      });
      setFilteredData(filtered);
    }
  }, [data, selectedCity, selectedState]);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error: No se pudieron cargar los datos.</Text>;
  }

  const allCities = data ? [...new Set(data.map((person) => person.address?.city || 'N/A'))] : [];
  const allStates = data ? [...new Set(data.map((person) => person.address?.state || 'N/A'))] : [];

  const handlePersonClick = (person: Data) => {
    setSelectedPerson(person);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All Cities" value="" />
          {allCities.map((city) => (
            <Picker.Item key={city} label={city} value={city} />
          ))}
        </Picker>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => setSelectedState(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All States" value="" />
          {allStates.map((state) => (
            <Picker.Item key={state} label={state} value={state} />
          ))}
        </Picker>
      </View>
      {filteredData.map((person: Data, index: number) => (
        <TouchableOpacity
          key={index}
          style={styles.personContainer}
          onPress={() => handlePersonClick(person)}
        >
          <Text>Name: {person.name || 'N/A'}</Text>
          <Text>Phone Number: {person.phoneNumber || 'N/A'}</Text>
        </TouchableOpacity>
      ))}
   
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    
  },
  personContainer: {
    margin: 10,
    padding: 10,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
  },
  personDetails: {
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
});

export default Filters;
