// // import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
// // import { LineChart } from "react-native-chart-kit";
// // const screenWidth = Dimensions.get("window").width;
// // export default function ReportScreen({ route }) {
// //   const { reportName } = route.params;
// //   const generateRandomData = () =>
// //     Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

// //   const chartData = {
// //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
// //     datasets: [
// //       {
// //         data: generateRandomData(),
// //         strokeWidth: 2,
// //       },
// //     ],
// //   };

// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
// //       <Text style={styles.title}>{reportName}</Text>
// //       <View style={styles.card}>
// //         <LineChart
// //           data={chartData}
// //           width={screenWidth - 40}
// //           height={240}
// //           chartConfig={{
// //             backgroundColor: "#fff",
// //             backgroundGradientFrom: "#fff",
// //             backgroundGradientTo: "#fff",
// //             decimalPlaces: 0,
// //             color: (opacity = 1) => `rgba(37,99,235,${opacity})`,
// //             labelColor: (opacity = 1) => `rgba(31,41,55,${opacity})`, 
// //             style: {
// //               borderRadius: 20,
// //             },
// //             propsForDots: {
// //               r: "6",
// //               strokeWidth: "2",
// //               stroke: "#2563eb",
// //             },
// //           }}
// //           bezier
// //           style={styles.chart}
// //         />
// //       </View>
// //       <View style={styles.summaryBox}>
// //         <Text style={styles.summaryTitle}>Summary</Text>
// //         <Text style={styles.summaryText}>This is a sample summary for the {reportName}. You can add more insights or statistics here.</Text>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f6f8fa",
// //   },
// //   scrollContent: {
// //     alignItems: "center",
// //     paddingVertical: 30,
// //     paddingHorizontal: 10,
// //   },
// //   title: {
// //     fontSize: 26,
// //     color: "#2563eb",
// //     fontWeight: "bold",
// //     marginBottom: 18,
// //     letterSpacing: 0.5,
// //     textAlign: "center",
// //     textShadowColor: "#e0e7ef",
// //     textShadowOffset: { width: 0, height: 1 },
// //     textShadowRadius: 2,
// //   },
// //   card: {
// //     backgroundColor: "#fff",
// //     borderRadius: 20,
// //     paddingVertical: 18,
// //     paddingHorizontal: 8,
// //     marginBottom: 28,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.08,
// //     shadowRadius: 6,
// //     elevation: 3,
// //     alignItems: "center",
// //     borderWidth: 1,
// //     borderColor: "#e5e7eb",
// //   },
// //   chart: {
// //     borderRadius: 20,
// //     backgroundColor: "#fff",
// //   },
// //   summaryBox: {
// //     backgroundColor: "#f3f4f6",
// //     borderRadius: 14,
// //     padding: 18,
// //     width: screenWidth - 40,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 1 },
// //     shadowOpacity: 0.06,
// //     shadowRadius: 2,
// //     elevation: 1,
// //     marginBottom: 20,
// //     borderWidth: 1,
// //     borderColor: "#e5e7eb",
// //   },
// //   summaryTitle: {
// //     color: "#111827",
// //     fontSize: 18,
// //     fontWeight: "600",
// //     marginBottom: 6,
// //   },
// //   summaryText: {
// //     color: "#374151",
// //     fontSize: 15,
// //     lineHeight: 22,
// //   },
// // });


// src/screens/ReportScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TaskReportScreen from "./Reports/TaskReportScreen";
import TimeLogReportScreen from "./Reports/TimeLogReportScreen";
import FinanceReportScreen from "./Reports/FinanceReportScreen";
import SalesReportScreen from "./Reports/SalesReportScreen";
import LeadReportScreen from "./Reports/LeadReportScreen";

export default function ReportScreen({ route }) {
  const { reportName } = route.params;

  const renderReport = () => {
    switch (reportName) {
      case "Task Report":
        return <TaskReportScreen />;
      case "Time Log Report":
        return <TimeLogReportScreen />;
      case "Finance Report":
        return <FinanceReportScreen />;
case "Sales Report":
        return <FinanceReportScreen />;      default:
        return (
          <View style={styles.center}>
            <Text style={styles.placeholder}>{reportName}</Text>
          </View>
        );
    }
  };

  return <View style={styles.container}>{renderReport()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    fontSize: 18,
    fontWeight: "600",
  },
});
