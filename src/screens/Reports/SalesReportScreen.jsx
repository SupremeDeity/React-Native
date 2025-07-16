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

      <View style={styles.tableHeader}>
        {[
          "Paid On",
          "Invoice Number",
          "Client Name",
          "Invoice Value",
          "Amount Paid",
          "Taxable Value",
          "Discount",
          "Sindh Tax",
          "Punjab Tax",
          "KPK Tax",
          "Balochistan Tax",
          "Withholding Tax",
          "Income Tax",
          "Bank Account",
        ].map((heading, idx) => (
          <Text key={idx} style={styles.headerCell}>{heading}</Text>
        ))}
      </View>

      {salesData.length === 0 ? (
        <View style={styles.noDataBox}>
          <Text style={styles.noDataText}>No data available in table</Text>
        </View>
      ) : (
        <FlatList
          data={salesData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
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
    width: Dimensions.get("window").width / 2.3,
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
    width: Dimensions.get("window").width / 2.3,
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