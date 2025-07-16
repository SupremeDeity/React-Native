import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const timeLogData = [
  {
    code: 'Proj#07-1',
    task: 'Working',
    description: 'Employee Recruitment',
    employee: {
      name: 'Dua Siddiqui',
      role: 'Portfolio Manager',
      avatar: 'https://via.placeholder.com/30',
    },
    startTime: '11-07-2025 10:04 pm',
    endTime: '11-07-2025 10:05 pm',
    totalHours: '1m',
    earnings: '$0.00',
  },
  // Additional mock data can be added here
];

export default function TimeLogReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Code</Text>
        <Text style={styles.headerCell}>Tasks</Text>
        <Text style={styles.headerCell}>Employee</Text>
        <Text style={styles.headerCell}>Start Time</Text>
        <Text style={styles.headerCell}>End Time</Text>
        <Text style={styles.headerCell}>Total Hours</Text>
        <Text style={styles.headerCell}>Earnings</Text>
      </View>

      <FlatList
        data={timeLogData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cell}>{item.code}</Text>
            <View style={styles.cell}>
              <Text style={{ fontWeight: 'bold' }}>{item.task}</Text>
              <Text>{item.description}</Text>
            </View>
            <View style={styles.cellRow}>
              <Image source={{ uri: item.employee.avatar }} style={styles.avatar} />
              <View>
                <Text>{item.employee.name} <Text style={styles.youTag}>it's you</Text></Text>
                <Text>{item.employee.role}</Text>
              </View>
            </View>
            <Text style={styles.cell}>{item.startTime}</Text>
            <Text style={styles.cell}>{item.endTime}</Text>
            <Text style={styles.cell}>{item.totalHours}</Text>
            <Text style={styles.cell}>{item.earnings}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 6,
  },
  exportButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563eb',
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  exportText: {
    color: '#fff',
    fontWeight: '600',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    fontSize: 12,
  },
  cellRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 6,
  },
  youTag: {
    backgroundColor: '#e5e7eb',
    fontSize: 10,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});