
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
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const taskData = [
  {
    code: 'Proj#04-2',
    task: 'Task 2',
    project: 'Infra Security Upgrade',
    dueDate: '21-08-2025',
    assignedTo: ['https://via.placeholder.com/30'],
    status: 'Doing',
  },
  {
    code: 'Proj#04-1',
    task: 'Task 1',
    project: 'Infra Security Upgrade',
    dueDate: '27-08-2025',
    assignedTo: ['https://via.placeholder.com/30'],
    status: 'To Do',
  },
  // Add more tasks as needed
];

const statusColors = {
  Incomplete: 'red',
  'To Do': 'orange',
  Doing: 'blue',
  Completed: 'green',
};

export default function TaskReportScreen() {
  const pieData = [
    { name: 'Incomplete', count: 1, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'To Do', count: 2, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Doing', count: 3, color: 'blue', legendFontColor: '#7F7F7F', legendFontSize: 12 },
    { name: 'Completed', count: 1, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}><Text>Duration</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Status</Text></TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}><Text>Project</Text></TouchableOpacity>
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={200}
          chartConfig={{
            color: () => `black`,
          }}
          accessor="count"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>

      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Code</Text>
        <Text style={styles.headerCell}>Task</Text>
        <Text style={styles.headerCell}>Project</Text>
        <Text style={styles.headerCell}>Due Date</Text>
        <Text style={styles.headerCell}>Assigned</Text>
        <Text style={styles.headerCell}>Status</Text>
      </View>

      <FlatList
        data={taskData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.cell}>{item.code}</Text>
            <Text style={styles.cell}>{item.task}</Text>
            <Text style={styles.cell}>{item.project}</Text>
            <Text style={styles.cell}>{item.dueDate}</Text>
            <View style={styles.cellRow}>
              {item.assignedTo.map((uri, idx) => (
                <Image
                  key={idx}
                  source={{ uri }}
                  style={styles.avatar}
                />
              ))}
            </View>
            <View style={styles.cell}>
              <View style={[styles.statusDot, { backgroundColor: statusColors[item.status] }]} />
              <Text>{item.status}</Text>
            </View>
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
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 4,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
});