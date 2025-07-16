import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Sample data for the Expense Report
const expenseOverviewData = {
  totalExpense: 125750.00,
};

// Data for Bar Chart - Monthly Expenses
const monthlyExpenseData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [15000, 18500, 22000, 19500, 25000, 20750],
      color: (opacity = 1) => `#36A2EB`, // Solid blue color
      strokeWidth: 2,
    },
  ],
  legend: ['Monthly Expenses'],
};

// Data for Pie Chart - Expense Categories
const expenseCategoryData = [
  { name: 'Office Supplies', amount: 25000, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Travel', amount: 35000, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Equipment', amount: 45000, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Marketing', amount: 15000, color: '#4BC0C0', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Utilities', amount: 5750, color: '#9966FF', legendFontColor: '#7F7F7F', legendFontSize: 12 },
];

// Sample data for Expense Table
const expenseData = [
  {
    id: 1,
    itemName: 'Laptop Dell XPS 13',
    price: 1299.99,
    employee: 'John Smith',
    purchasedFrom: 'Dell Online Store',
    bankAccount: 'Chase Business - ***4567',
    purchaseDate: '2025-07-10',
    bill: 'INV-2025-001',
    status: 'Approved',
  },
  {
    id: 2,
    itemName: 'Office Chair',
    price: 450.00,
    employee: 'Sarah Johnson',
    purchasedFrom: 'Office Depot',
    bankAccount: 'Chase Business - ***4567',
    purchaseDate: '2025-07-08',
    bill: 'INV-2025-002',
    status: 'Pending',
  },
  {
    id: 3,
    itemName: 'Travel Accommodation',
    price: 850.00,
    employee: 'Mike Davis',
    purchasedFrom: 'Booking.com',
    bankAccount: 'American Express - ***8901',
    purchaseDate: '2025-07-05',
    bill: 'INV-2025-003',
    status: 'Approved',
  },
  {
    id: 4,
    itemName: 'Marketing Materials',
    price: 275.50,
    employee: 'Lisa Chen',
    purchasedFrom: 'Vistaprint',
    bankAccount: 'Chase Business - ***4567',
    purchaseDate: '2025-07-12',
    bill: 'INV-2025-004',
    status: 'Rejected',
  },
  {
    id: 5,
    itemName: 'Software License',
    price: 1200.00,
    employee: 'Alex Brown',
    purchasedFrom: 'Adobe',
    bankAccount: 'Chase Business - ***4567',
    purchaseDate: '2025-07-14',
    bill: 'INV-2025-005',
    status: 'Approved',
  },
];

export default function ExpenseReportScreen() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const statusColors = {
    Approved: '#4CAF50',
    Pending: '#FF9800',
    Rejected: '#F44336',
  };

  const InfoBox = ({ title, value, subtitle }) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoValue}>${value.toLocaleString()}</Text>
      {subtitle && <Text style={styles.infoSubtitle}>{subtitle}</Text>}
    </View>
  );

  const renderExpenseItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.itemName}</Text>
      <Text style={styles.tableCell}>${item.price.toFixed(2)}</Text>
      <Text style={styles.tableCell}>{item.employee}</Text>
      <Text style={styles.tableCell}>{item.purchasedFrom}</Text>
      <Text style={styles.tableCell}>{item.bankAccount}</Text>
      <Text style={styles.tableCell}>{item.purchaseDate}</Text>
      <Text style={styles.tableCell}>{item.bill}</Text>
      <View style={styles.statusCell}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: statusColors[item.status] },
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );

  const filteredData = selectedFilter === 'All' 
    ? expenseData 
    : expenseData.filter(item => item.status === selectedFilter);

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <Text style={styles.breadcrumb}>Home &gt; Expense Report</Text>
        <TouchableOpacity style={styles.exportButtonTop}>
          <Text style={styles.exportText}>Export Report</Text>
        </TouchableOpacity>
      </View>

      {/* Total Expense Info Box */}
      <InfoBox 
        title="Total Expense" 
        value={expenseOverviewData.totalExpense} 
        subtitle="Current month expenses"
      />

      {/* Charts Section */}
      <View style={styles.chartsContainer}>
        {/* Bar Chart - Monthly Expenses */}
        <View style={styles.chartBox}>
          <Text style={styles.chartTitle}>Monthly Expense Report</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BarChart
              data={monthlyExpenseData}
              width={screenWidth > 400 ? screenWidth - 40 : 400}
              height={220}
              yAxisLabel="$"
              yAxisSuffix=""
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `#36A2EB`,
                labelColor: (opacity = 1) => `#000000`,
                style: {
                  borderRadius: 16,
                },
                propsForBackgroundLines: {
                  strokeDasharray: '',
                },
                fillShadowGradient: '#36A2EB',
                fillShadowGradientOpacity: 1,
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              fromZero={true}
              showBarTops={false}
              withInnerLines={true}
            />
          </ScrollView>
        </View>

        {/* Pie Chart - Expense Categories */}
        <View style={styles.chartBox}>
          <Text style={styles.chartTitle}>Expense Category Report</Text>
          <PieChart
            data={expenseCategoryData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="amount"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        {['All', 'Approved', 'Pending', 'Rejected'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.activeFilterButton,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Expense Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Expense Details</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Item Name</Text>
              <Text style={styles.tableHeaderCell}>Price</Text>
              <Text style={styles.tableHeaderCell}>Employee</Text>
              <Text style={styles.tableHeaderCell}>Purchased From</Text>
              <Text style={styles.tableHeaderCell}>Bank Account</Text>
              <Text style={styles.tableHeaderCell}>Purchase Date</Text>
              <Text style={styles.tableHeaderCell}>Bill</Text>
              <Text style={styles.tableHeaderCell}>Status</Text>
            </View>
            <FlatList
              data={filteredData}
              renderItem={renderExpenseItem}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Showing {filteredData.length} of {expenseData.length} expenses
        </Text>
        <Text style={styles.summaryText}>
          Total Amount: ${filteredData.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </Text>
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
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  chartsContainer: {
    marginBottom: 20,
  },
  chartBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  filterContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: "auto",
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#007bff',
  },
  filterText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#fff',
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
  tableHeaderCell: {
    minWidth: 120,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#495057',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  tableCell: {
    minWidth: 120,
    maxWidth: 120,
    fontSize: 12,
    color: '#495057',
    textAlign: 'center',
  },
  statusCell: {
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});
