import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonList from '../components/PersonList';
import PersonDetails from '../components/PersonDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PersonList" component={PersonList} />
      <Stack.Screen name="PersonDetails" component={PersonDetails} />
    </Stack.Navigator>
  );
};

export default AppNavigator;


