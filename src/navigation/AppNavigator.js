import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeDashboard from '../screens/EmployeeDashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employees" component={EmployeeDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
