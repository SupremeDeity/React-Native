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

const screenWidth = Dimensions.get('window').width;

// Sample data for the Attendance Report
const attendanceData = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Senior Developer',
    avatar: 'https://i.pravatar.cc/40?img=1',
    present: 22,
    absent: 3,
    extraDays: 2,
    hrsClocked: 176,
    daysLate: 1,
    halfDay: 2,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Project Manager',
    avatar: 'https://i.pravatar.cc/40?img=2',
    present: 24,
    absent: 1,
    extraDays: 0,
    hrsClocked: 192,
    daysLate: 0,
    halfDay: 1,
  },
  {
    id: 3,
    name: 'Mike Davis',
    title: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/40?img=3',
    present: 20,
    absent: 5,
    extraDays: 1,
    hrsClocked: 160,
    daysLate: 3,
    halfDay: 0,
  },
  {
    id: 4,
    name: 'Lisa Chen',
    title: 'Business Analyst',
    avatar: 'https://i.pravatar.cc/40?img=4',
    present: 23,
    absent: 2,
    extraDays: 1,
    hrsClocked: 184,
    daysLate: 2,
    halfDay: 1,
  },
  {
    id: 5,
    name: 'Alex Brown',
    title: 'DevOps Engineer',
    avatar: 'https://i.pravatar.cc/40?img=5',
    present: 25,
    absent: 0,
    extraDays: 3,
    hrsClocked: 200,
    daysLate: 0,
    halfDay: 0,
  },
  {
    id: 6,
    name: 'Emily Wilson',
    title: 'QA Tester',
    avatar: 'https://i.pravatar.cc/40?img=6',
    present: 21,
    absent: 4,
    extraDays: 0,
    hrsClocked: 168,
    daysLate: 2,
    halfDay: 3,
  },
  {
    id: 7,
    name: 'David Lee',
    title: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/40?img=7',
    present: 24,
    absent: 1,
    extraDays: 2,
    hrsClocked: 192,
    daysLate: 1,
    halfDay: 0,
  },
  {
    id: 8,
    name: 'Jessica Taylor',
    title: 'Marketing Manager',
    avatar: 'https://i.pravatar.cc/40?img=8',
    present: 22,
    absent: 3,
    extraDays: 1,
    hrsClocked: 176,
    daysLate: 1,
    halfDay: 2,
  },
];

export default function AttendanceReportScreen() {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedData = [...attendanceData].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const renderAttendanceItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.employeeCell}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.employeeInfo}>
          <Text style={styles.employeeName}>{item.name}</Text>
          <Text style={styles.employeeTitle}>{item.title}</Text>
        </View>
      </View>
      <Text style={styles.tableCell}>{item.present}</Text>
      <Text style={styles.tableCell}>{item.absent}</Text>
      <Text style={styles.tableCell}>{item.extraDays}</Text>
      <Text style={styles.tableCell}>{item.hrsClocked}</Text>
      <Text style={styles.tableCell}>{item.daysLate}</Text>
      <Text style={styles.tableCell}>{item.halfDay}</Text>
    </View>
  );

  const renderSortableHeader = (title, sortKey) => (
    <TouchableOpacity
      style={styles.sortableHeader}
      onPress={() => handleSort(sortKey)}
    >
      <Text style={styles.tableHeaderCell}>{title}</Text>
      {sortBy === sortKey && (
        <Text style={styles.sortIndicator}>
          {sortOrder === 'asc' ? '↑' : '↓'}
        </Text>
      )}
    </TouchableOpacity>
  );

  // Calculate summary statistics
  const totalPresent = attendanceData.reduce((sum, item) => sum + item.present, 0);
  const totalAbsent = attendanceData.reduce((sum, item) => sum + item.absent, 0);
  const totalExtraDays = attendanceData.reduce((sum, item) => sum + item.extraDays, 0);
  const totalHrsClocked = attendanceData.reduce((sum, item) => sum + item.hrsClocked, 0);
  const totalDaysLate = attendanceData.reduce((sum, item) => sum + item.daysLate, 0);
  const totalHalfDays = attendanceData.reduce((sum, item) => sum + item.halfDay, 0);

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <Text style={styles.breadcrumb}>Home &gt; Attendance Report</Text>
        <TouchableOpacity style={styles.exportButtonTop}>
          <Text style={styles.exportText}>Export Report</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Employees</Text>
          <Text style={styles.summaryValue}>{attendanceData.length}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Avg Hours/Employee</Text>
          <Text style={styles.summaryValue}>{Math.round(totalHrsClocked / attendanceData.length)}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Present Days</Text>
          <Text style={styles.summaryValue}>{totalPresent}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Absent Days</Text>
          <Text style={styles.summaryValue}>{totalAbsent}</Text>
        </View>
      </View>
      {/* Attendance Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Employee Attendance Details</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              {renderSortableHeader('Employee', 'name')}
              {renderSortableHeader('Present', 'present')}
              {renderSortableHeader('Absent', 'absent')}
              {renderSortableHeader('Extra Days', 'extraDays')}
              {renderSortableHeader('Hrs Clocked', 'hrsClocked')}
              {renderSortableHeader('Days Late', 'daysLate')}
              {renderSortableHeader('Half Day', 'halfDay')}
            </View>
            <FlatList
              data={sortedData}
              renderItem={renderAttendanceItem}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
            
            {/* Summary Row */}
            <View style={styles.summaryRow}>
              <View style={styles.employeeCell}>
                <Text style={styles.summaryRowText}>TOTAL</Text>
              </View>
              <Text style={styles.summaryCell}>{totalPresent}</Text>
              <Text style={styles.summaryCell}>{totalAbsent}</Text>
              <Text style={styles.summaryCell}>{totalExtraDays}</Text>
              <Text style={styles.summaryCell}>{totalHrsClocked}</Text>
              <Text style={styles.summaryCell}>{totalDaysLate}</Text>
              <Text style={styles.summaryCell}>{totalHalfDays}</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Additional Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Attendance Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Attendance Rate</Text>
            <Text style={styles.statValue}>
              {Math.round((totalPresent / (totalPresent + totalAbsent)) * 100)}%
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Punctuality Rate</Text>
            <Text style={styles.statValue}>
              {Math.round(((totalPresent - totalDaysLate) / totalPresent) * 100)}%
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Extra Days Worked</Text>
            <Text style={styles.statValue}>{totalExtraDays}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Half Days Taken</Text>
            <Text style={styles.statValue}>{totalHalfDays}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  breadcrumb: {
    color: '#666',
    fontSize: 14,
    flex: 1,
  },
  exportButtonTop: {
    backgroundColor: '#28a745',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  exportText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  summaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  filterInfo: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  filterText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  sortableHeader: {
    minWidth: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeaderCell: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#495057',
    textAlign: 'center',
  },
  sortIndicator: {
    fontSize: 12,
    color: '#007bff',
    marginLeft: 4,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  employeeCell: {
    minWidth: 140,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  employeeTitle: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
  tableCell: {
    minWidth: 140,
    fontSize: 12,
    color: '#495057',
    textAlign: 'center',
    alignSelf: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#e9ecef',
    borderTopWidth: 2,
    borderTopColor: '#007bff',
  },
  summaryRowText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryCell: {
    minWidth: 140,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    alignSelf: 'center',
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
});
