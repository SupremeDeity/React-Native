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
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const taskData = [
  {
    code: "Proj#04-2",
    task: "Task 2",
    project: "Infra Security Upgrade",
    dueDate: "21-08-2025",
    assignedTo: ["https://i.pravatar.cc/30"],
    status: "Doing",
  },
  {
    code: "Proj#04-1",
    task: "Task 1",
    project: "Infra Security Upgrade",
    dueDate: "27-08-2025",
    assignedTo: ["https://i.pravatar.cc/30"],
    status: "To Do",
  },
];

const statusColors = {
  Incomplete: "red",
  "To Do": "orange",
  Doing: "blue",
  Completed: "green",
};

export default function TaskReportScreen() {
  const pieData = [
    {
      name: "Incomplete",
      count: 1,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "To Do",
      count: 2,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Doing",
      count: 3,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Completed",
      count: 1,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.exportButton}>
        <Text style={styles.exportText}>Export</Text>
      </TouchableOpacity>
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
      <View style={styles.tableContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
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
                      <Image key={idx} source={{ uri }} style={styles.avatar} />
                    ))}
                  </View>
                  <View style={styles.cell}>
                    <View
                      style={[
                        styles.statusDot,
                        { backgroundColor: statusColors[item.status] },
                      ]}
                    />
                    <Text>{item.status}</Text>
                  </View>
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
    padding: 16,
    backgroundColor: "#fff",
  },
  chartContainer: {
    alignItems: "center",
    marginBottom: 20,
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
    backgroundColor: "#f8f9fa",
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  headerCell: {
    minWidth: 120,
    fontWeight: "bold",
    fontSize: 15,
    color: "#343a40",
    textAlign: "center",
    letterSpacing: 0.2,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f1f3f4",
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  cell: {
    minWidth: 120,
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    paddingVertical: 2,
  },
  cellRow: {
    minWidth: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
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
