import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import EmployeeCard from '@components/EmployeeCard';
import employees from '@data/employees';
import { useEffect } from 'react';

export default function EmployeeDashboard({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      
    });
  }, [navigation])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Management</Text>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EmployeeCard employee={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F9FA',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
