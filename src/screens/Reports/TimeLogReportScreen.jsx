import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const timeLogData = [
  {
    code: "Proj#07-1",
    task: "Working",
    description: "Employee Recruitment",
    employee: {
      name: "Dua Siddiqui",
      role: "Portfolio Manager",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    startTime: "11-07-2025 10:04 pm",
    endTime: "11-07-2025 10:05 pm",
    totalHours: "1m",
    earnings: "$0.00",
  },
  // Additional mock data can be added here
];

export default function TimeLogReportScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>

      <View style={styles.tableContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
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
              renderItem={({ item, index }) => (
                <View
                  style={[
                    styles.tableRow,
                    index % 2 === 0 ? styles.rowEven : styles.rowOdd,
                  ]}
                >
                  <Text style={styles.cell}>{item.code}</Text>
                  <View style={styles.cell}>
                    <Text style={styles.taskText}>{item.task}</Text>
                    <Text style={styles.descriptionText}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.cellRow}>
                    <Image
                      source={{ uri: item.employee.avatar }}
                      style={styles.avatar}
                    />
                    <View>
                      <Text style={styles.employeeName}>
                        {item.employee.name}
                      </Text>
                      <Text style={styles.employeeRole}>
                        {item.employee.role}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.cell}>{item.startTime}</Text>
                  <Text style={styles.cell}>{item.endTime}</Text>
                  <Text style={styles.cell}>{item.totalHours}</Text>
                  <Text style={styles.cell}>{item.earnings}</Text>
                </View>
              )}
              showsVerticalScrollIndicator={true}
            />
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
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 6,
  },
  exportButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 0,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exportText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  tableContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    paddingVertical: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  rowEven: {
    backgroundColor: "#f8f9fa",
  },
  rowOdd: {
    backgroundColor: "#fff",
  },
  headerCell: {
    minWidth: 160,
    maxWidth: 160,
    fontWeight: "bold",
    fontSize: 15,
    color: "#343a40",
    textAlign: "center",
    letterSpacing: 0.2,
  },
  tableRow: {
    minWidth: 160,
    maxWidth: 160,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f1f3f4",
    paddingVertical: 14,
  },
  cell: {
    minWidth: 160,
    maxWidth: 160,
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
  },
  cellRow: {
    minWidth: 160,
    maxWidth: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 2,
    borderColor: "#28a745",
    backgroundColor: "#fff",
    shadowColor: "#28a745",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "#28a745",
    marginBottom: 2,
  },
  descriptionText: {
    fontSize: 12,
    color: "#6c757d",
    fontStyle: "italic",
    textAlign: "center",
  },
  employeeName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#343a40",
    marginBottom: 2,
  },
  employeeRole: {
    fontSize: 12,
    color: "#6c757d",
    fontWeight: "500",
  },
});
