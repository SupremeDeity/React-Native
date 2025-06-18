import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmployeeCard({ employee }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{employee.name}</Text>
      <Text style={styles.info}>Department: {employee.department}</Text>
      <Text style={styles.status}>Status: {employee.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#007BFF',
  },
});
