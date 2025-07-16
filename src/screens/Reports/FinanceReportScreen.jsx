
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function FinanceReportScreen() {
  return (
    <View style={styles.wrapper}>

      {/* Main Content */}
      <ScrollView style={styles.main}>
        {/* Top Filter */}
        <View style={styles.topBar}>
          <Text style={styles.breadcrumb}>Home &gt; Finance Report</Text>
          <View style={styles.filters}>
            <Text style={styles.filter}>Duration: 01-07-2025 To 11-07-2025</Text>
            <Text style={styles.filter}>Client: All</Text>
            <Text style={styles.filter}>Project: All</Text>
          </View>
        </View>

        {/* Earnings Box */}
        <View style={styles.earningsBox}>
          <Text style={styles.earningsLabel}>Total Earnings</Text>
          <Text style={styles.earningsValue}>$0.00</Text>
        </View>

        {/* Finance Report Chart Placeholder */}
        <View style={styles.reportBox}>
          <Text style={styles.reportTitle}>Finance Report</Text>
          <Text style={styles.noData}>- Not enough data -</Text>
        </View>

        {/* Export Button */}
        <TouchableOpacity style={styles.exportButton}>
          <Text style={styles.exportText}>Export</Text>
        </TouchableOpacity>

        {/* Table */}
        <View style={styles.tableHeader}>
          <Text style={styles.tableCol}>Project</Text>
          <Text style={styles.tableCol}>Invoice</Text>
          <Text style={styles.tableCol}>Amount</Text>
          <Text style={styles.tableCol}>Paid On</Text>
          <Text style={styles.tableCol}>Status</Text>
        </View>
        
        {/* Add whatever table is needed here */}
        <Text style={styles.noTableData}>No data available in table</Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Show 10 entries</Text>
          <Text>Showing 0 to 0 of 0 entries</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, flexDirection: 'row', backgroundColor: '#f8f9fa' },
  sidebar: {
    width: 240,
    backgroundColor: '#0b0f1f',
    padding: 12,
    paddingTop: 24,
  },
  sidebarTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  menuSection: {
    marginTop: 10,
  },
  menuHeader: {
    marginTop: 16,
    fontWeight: 'bold',
    color: '#ccc',
  },
  menuItem: {
    color: '#ccc',
    fontSize: 13,
    marginVertical: 6,
  },
  active: {
    color: '#fff',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  topBar: {
    marginBottom: 12,
  },
  breadcrumb: {
    color: '#666',
    marginBottom: 8,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  filter: {
    marginRight: 16,
    backgroundColor: '#f1f1f1',
    padding: 6,
    borderRadius: 4,
    fontSize: 12,
  },
  earningsBox: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  earningsLabel: { fontSize: 14, color: '#444' },
  earningsValue: { fontSize: 20, fontWeight: 'bold', color: 'red' },
  reportBox: {
    backgroundColor: '#f9f9f9',
    height: 160,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  reportTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noData: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  exportButton: {
    backgroundColor: '#e6e6e6',
    padding: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginBottom: 8,
  },
  exportText: {
    fontSize: 12,
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableCol: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  noTableData: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
    fontSize: 12,
  },
  footer: {
    marginTop: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
