import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 20,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 40,
  },
});

export default SearchBar;
