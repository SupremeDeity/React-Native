import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Sample data for the Leave Report
const leaveData = [
  {
    id: 1,
    employeeName: 'John Smith',
    avatar: 'https://i.pravatar.cc/40?img=1',
    approved: 15,
    pending: 2,
    upcoming: 5,
  },
  {
    id: 2,
    employeeName: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/40?img=2',
    approved: 12,
    pending: 1,
    upcoming: 3,
  },
  {
    id: 3,
    employeeName: 'Mike Davis',
    avatar: 'https://i.pravatar.cc/40?img=3',
    approved: 18,
    pending: 0,
    upcoming: 7,
  },
  {
    id: 4,
    employeeName: 'Lisa Chen',
    avatar: 'https://i.pravatar.cc/40?img=4',
    approved: 10,
    pending: 3,
    upcoming: 2,
  },
  {
    id: 5,
    employeeName: 'Alex Brown',
    avatar: 'https://i.pravatar.cc/40?img=5',
    approved: 14,
    pending: 1,
    upcoming: 4,
  },
  {
    id: 6,
    employeeName: 'Emily Wilson',
    avatar: 'https://i.pravatar.cc/40?img=6',
    approved: 16,
    pending: 2,
    upcoming: 6,
  },
  {
    id: 7,
    employeeName: 'David Lee',
    avatar: 'https://i.pravatar.cc/40?img=7',
    approved: 11,
    pending: 0,
    upcoming: 1,
  },
  {
    id: 8,
    employeeName: 'Jessica Taylor',
    avatar: 'https://i.pravatar.cc/40?img=8',
    approved: 13,
    pending: 4,
    upcoming: 8,
  },
];

export default function LeaveReportScreen() {
  const [sortBy, setSortBy] = useState('employeeName');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const handleViewAction = (employee) => {
    Alert.alert(
      'Leave Details',
      `Viewing leave details for ${employee.employeeName}\n\nApproved: ${employee.approved} days\nPending: ${employee.pending} days\nUpcoming: ${employee.upcoming} days`,
      [{ text: 'OK' }]
    );
  };

  const sortedData = [...leaveData].sort((a, b) => {
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

  const renderLeaveItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.employeeCell}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.employeeName}>{item.employeeName}</Text>
      </View>
      <Text style={styles.tableCell}>{item.approved}</Text>
      <Text style={styles.tableCell}>{item.pending}</Text>
      <Text style={styles.tableCell}>{item.upcoming}</Text>
      <View style={styles.actionCell}>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => handleViewAction(item)}
        >
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
      </View>
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
  const totalApproved = leaveData.reduce((sum, item) => sum + item.approved, 0);
  const totalPending = leaveData.reduce((sum, item) => sum + item.pending, 0);
  const totalUpcoming = leaveData.reduce((sum, item) => sum + item.upcoming, 0);
  const totalEmployees = leaveData.length;

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <Text style={styles.breadcrumb}>Home &gt; Leave Report</Text>
        <TouchableOpacity style={styles.exportButtonTop}>
          <Text style={styles.exportText}>Export Report</Text>
        </TouchableOpacity>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Total Employees</Text>
          <Text style={styles.summaryValue}>{totalEmployees}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Approved Leaves</Text>
          <Text style={[styles.summaryValue, styles.approvedColor]}>{totalApproved}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Pending Leaves</Text>
          <Text style={[styles.summaryValue, styles.pendingColor]}>{totalPending}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Upcoming Leaves</Text>
          <Text style={[styles.summaryValue, styles.upcomingColor]}>{totalUpcoming}</Text>
        </View>
      </View>

      {/* Leave Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Employee Leave Summary</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              {renderSortableHeader('Employee Name', 'employeeName')}
              {renderSortableHeader('Approved', 'approved')}
              {renderSortableHeader('Pending', 'pending')}
              {renderSortableHeader('Upcoming', 'upcoming')}
              <View style={styles.actionHeader}>
                <Text style={styles.tableHeaderCell}>Action</Text>
              </View>
            </View>
            <FlatList
              data={sortedData}
              renderItem={renderLeaveItem}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
            
            {/* Summary Row */}
            <View style={styles.summaryRow}>
              <View style={styles.employeeCell}>
                <Text style={styles.summaryRowText}>TOTAL</Text>
              </View>
              <Text style={styles.summaryCell}>{totalApproved}</Text>
              <Text style={styles.summaryCell}>{totalPending}</Text>
              <Text style={styles.summaryCell}>{totalUpcoming}</Text>
              <View style={styles.actionCell}>
                <Text style={styles.summaryRowText}>-</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Additional Statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Leave Statistics</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Avg Approved/Employee</Text>
            <Text style={styles.statValue}>
              {Math.round(totalApproved / totalEmployees * 10) / 10}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Avg Pending/Employee</Text>
            <Text style={styles.statValue}>
              {Math.round(totalPending / totalEmployees * 10) / 10}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Total Leave Days</Text>
            <Text style={styles.statValue}>{totalApproved + totalPending + totalUpcoming}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Approval Rate</Text>
            <Text style={styles.statValue}>
              {Math.round((totalApproved / (totalApproved + totalPending)) * 100)}%
            </Text>
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
  approvedColor: {
    color: '#28a745',
  },
  pendingColor: {
    color: '#ffc107',
  },
  upcomingColor: {
    color: '#007bff',
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
    minWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionHeader: {
    minWidth: 100,
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
    minWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  employeeName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  tableCell: {
    minWidth: 120,
    fontSize: 12,
    color: '#495057',
    textAlign: 'center',
    alignSelf: 'center',
  },
  actionCell: {
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
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
    minWidth: 120,
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
  legendContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  legendGrid: {
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  approvedDot: {
    backgroundColor: '#28a745',
  },
  pendingDot: {
    backgroundColor: '#ffc107',
  },
  upcomingDot: {
    backgroundColor: '#007bff',
  },
  legendText: {
    fontSize: 12,
    color: '#666',
    flex: 1,
  },
});
