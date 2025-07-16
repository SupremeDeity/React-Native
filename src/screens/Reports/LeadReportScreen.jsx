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

const leadData = []; // Empty for now

export default function LeadReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Employee</Text>
              <Text style={styles.headerCell}>Total Leads</Text>
              <Text style={styles.headerCell}>Converted Leads</Text>
              <Text style={styles.headerCell}>Total Amount</Text>
              <Text style={styles.headerCell}>Converted Amount</Text>
              <Text style={styles.headerCell}>Total Follow Up</Text>
              <Text style={styles.headerCell}>Total Pending Follow Up</Text>
            </View>

            {leadData.length === 0 ? (
              <View style={styles.noDataBox}>
                <Text style={styles.noDataText}>No data available in table</Text>
              </View>
            ) : (
              <FlatList
                data={leadData}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={[styles.tableRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                    <Text style={styles.cell}>{item.employee}</Text>
                    <Text style={styles.cell}>{item.totalLeads}</Text>
                    <Text style={styles.cell}>{item.convertedLeads}</Text>
                    <Text style={styles.cell}>{item.totalAmount}</Text>
                    <Text style={styles.cell}>{item.convertedAmount}</Text>
                    <Text style={styles.cell}>{item.totalFollowUp}</Text>
                    <Text style={styles.cell}>{item.pendingFollowUp}</Text>
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
