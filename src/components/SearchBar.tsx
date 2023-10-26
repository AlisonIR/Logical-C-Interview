import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

interface SearchBarProps {
  onSearchTermChange: (term: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchTermChange, onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => onSearchTermChange(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  buttonContainer: {
    marginRight: 10, 
  },
  searchButton: {
    backgroundColor: '#56ADAD',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchBar;




