import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const salesData = []; // Empty for now, can be populated with mock entries

export default function SalesReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Paid On</Text>
              <Text style={styles.headerCell}>Invoice Number</Text>
              <Text style={styles.headerCell}>Client Name</Text>
              <Text style={styles.headerCell}>Invoice Value</Text>
              <Text style={styles.headerCell}>Amount Paid</Text>
              <Text style={styles.headerCell}>Taxable Value</Text>
              <Text style={styles.headerCell}>Discount</Text>
              <Text style={styles.headerCell}>Sindh Tax</Text>
              <Text style={styles.headerCell}>Punjab Tax</Text>
              <Text style={styles.headerCell}>KPK Tax</Text>
              <Text style={styles.headerCell}>Balochistan Tax</Text>
              <Text style={styles.headerCell}>Withholding Tax</Text>
              <Text style={styles.headerCell}>Income Tax</Text>
              <Text style={styles.headerCell}>Bank Account</Text>
            </View>

            {salesData.length === 0 ? (
              <View style={styles.noDataBox}>
                <Text style={styles.noDataText}>No data available in table</Text>
              </View>
            ) : (
              <FlatList
                data={salesData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={[styles.tableRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                    <Text style={styles.cell}>{item.paidOn}</Text>
                    <Text style={styles.cell}>{item.invoiceNumber}</Text>
                    <Text style={styles.cell}>{item.clientName}</Text>
                    <Text style={styles.cell}>{item.invoiceValue}</Text>
                    <Text style={styles.cell}>{item.amountPaid}</Text>
                    <Text style={styles.cell}>{item.taxableValue}</Text>
                    <Text style={styles.cell}>{item.discount}</Text>
                    <Text style={styles.cell}>{item.sindhTax}</Text>
                    <Text style={styles.cell}>{item.punjabTax}</Text>
                    <Text style={styles.cell}>{item.kpkTax}</Text>
                    <Text style={styles.cell}>{item.balochistanTax}</Text>
                    <Text style={styles.cell}>{item.withholdingTax}</Text>
                    <Text style={styles.cell}>{item.incomeTax}</Text>
                    <Text style={styles.cell}>{item.bankAccount}</Text>
                  </View>
                )}
                showsVerticalScrollIndicator={true}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  exportButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 0,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exportText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  rowEven: {
    backgroundColor: '#f8f9fa',
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
  headerCell: {
    minWidth: 140,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#343a40',
    textAlign: 'center',
    letterSpacing: 0.2,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#f1f3f4',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  cell: {
    minWidth: 140,
    fontSize: 14,
    color: '#495057',
    textAlign: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  noDataBox: {
    padding: 20,
    alignItems: "center",
  },
  noDataText: {
    color: "#6b7280",
    fontSize: 14,
  },
});