import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonList from '../components/PersonList';
import PersonDetails from '../components/PersonDetails';
import Filters from '../components/Filters'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PersonList" component={PersonList} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );
};

export default AppNavigator;


