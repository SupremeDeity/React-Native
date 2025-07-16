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

      <View style={styles.tableHeader}>
        {[
          "Employee",
          "Total Leads",
          "Converted Leads",
          "Total Amount",
          "Converted Amount",
          "Total Follow Up",
          "Total Pending Follow Up",
        ].map((heading, idx) => (
          <Text key={idx} style={styles.headerCell}>{heading}</Text>
        ))}
      </View>

      {leadData.length === 0 ? (
        <View style={styles.noDataBox}>
          <Text style={styles.noDataText}>No data available in table</Text>
        </View>
      ) : (
        <FlatList
          data={leadData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text style={styles.cell}>{item.employee}</Text>
              <Text style={styles.cell}>{item.totalLeads}</Text>
              <Text style={styles.cell}>{item.convertedLeads}</Text>
              <Text style={styles.cell}>{item.totalAmount}</Text>
              <Text style={styles.cell}>{item.convertedAmount}</Text>
              <Text style={styles.cell}>{item.totalFollowUp}</Text>
              <Text style={styles.cell}>{item.pendingFollowUp}</Text>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 16,
    gap: 8,
  },
  filterButton: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 6,
  },
  exportButton: {
    alignSelf: "flex-start",
    backgroundColor: "#2563eb",
    padding: 8,
    borderRadius: 6,
    marginBottom: 12,
  },
  exportText: {
    color: "#fff",
    fontWeight: "600",
  },
  tableHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f3f4f6",
    padding: 10,
  },
  headerCell: {
    width: Dimensions.get("window").width / 2.2,
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 8,
  },
  cell: {
    width: Dimensions.get("window").width / 2.2,
    fontSize: 12,
    marginBottom: 8,
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
