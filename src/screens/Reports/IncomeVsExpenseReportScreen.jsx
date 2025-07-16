import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Sample data for the comparison
const data = {
  totalExpenses: 75000,
  totalEarnings: 120000,
};

const chartData = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      data: [data.totalEarnings, data.totalExpenses],
      colors: [
        (opacity = 1) => `#10b981`, // Income color
        (opacity = 1) => `#ef4444`, // Expenses color
      ],
    },
  ],
};

const chartConfig = {
  backgroundColor: "transparent",
  backgroundGradientTo: "white",
  backgroundGradientFrom: "white",
  backgroundGradientToOpactiy: 0,
  backgroundGradientFromOpactiy: 0,
  decimalPlaces: 0,
  color: (opacity = 1) => `white`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  barPercentage: 2,
  barRadius: 12,
  propsForBackgroundLines: {
    strokeDasharray: "",
  },
};

export default function IncomeVsExpenseReportScreen() {
  const netIncome = data.totalEarnings - data.totalExpenses;
  const isProfit = netIncome > 0;

  return (
    <ScrollView style={styles.container}>
      {/* Export Button */}
      <View style={styles.exportContainer}>
        <TouchableOpacity style={styles.exportButton}>
          <Ionicons name="download-outline" size={20} color="#3B82F6" />
          <Text style={styles.exportText}>Export Report</Text>
        </TouchableOpacity>
      </View>

      {/* Info Boxes */}
      <View style={styles.infoBoxContainer}>
        <View style={[styles.infoBox, styles.earningsBox]}>
          <View style={styles.infoBoxHeader}>
            <Ionicons name="trending-up" size={24} color="#10B981" />
            <Text style={styles.infoBoxTitle}>Total Earnings</Text>
          </View>
          <Text style={styles.infoBoxValue}>
            ${data.totalEarnings.toLocaleString()}
          </Text>
          <Text style={styles.infoBoxSubtext}>This month</Text>
        </View>

        <View style={[styles.infoBox, styles.expensesBox]}>
          <View style={styles.infoBoxHeader}>
            <Ionicons name="trending-down" size={24} color="#EF4444" />
            <Text style={styles.infoBoxTitle}>Total Expenses</Text>
          </View>
          <Text style={styles.infoBoxValue}>
            ${data.totalExpenses.toLocaleString()}
          </Text>
          <Text style={styles.infoBoxSubtext}>This month</Text>
        </View>
      </View>

      {/* Net Income Summary */}
      <View
        style={[
          styles.summaryBox,
          isProfit ? styles.profitBox : styles.lossBox,
        ]}
      >
        <View style={styles.summaryHeader}>
          <Ionicons
            name={isProfit ? "checkmark-circle" : "alert-circle"}
            size={24}
            color={isProfit ? "#10B981" : "#EF4444"}
          />
          <Text style={styles.summaryTitle}>
            Net {isProfit ? "Profit" : "Loss"}
          </Text>
        </View>
        <Text
          style={[
            styles.summaryValue,
            isProfit ? styles.profitText : styles.lossText,
          ]}
        >
          ${Math.abs(netIncome).toLocaleString()}
        </Text>
        <Text style={styles.summarySubtext}>
          {isProfit ? "Above" : "Below"} break-even this month
        </Text>
      </View>

      {/* Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Income vs Expense Comparison</Text>
        <View style={styles.chartWrapper}>
          <BarChart
            data={chartData}
            width={width - 60}
            height={300}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            fromZero={true}
            style={styles.chart}
            withCustomBarColorFromData
            
          />
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "#10B981" }]}
            />
            <Text style={styles.legendText}>Income</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "#EF4444" }]}
            />
            <Text style={styles.legendText}>Expenses</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  exportContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: 10,
  },
  exportButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBF4FF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#3B82F6",
  },
  exportText: {
    color: "#3B82F6",
    fontWeight: "600",
    marginLeft: 8,
  },
  infoBoxContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  earningsBox: {
    borderLeftWidth: 4,
    borderLeftColor: "#10B981",
  },
  expensesBox: {
    borderLeftWidth: 4,
    borderLeftColor: "#EF4444",
  },
  infoBoxHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoBoxTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
    marginLeft: 8,
  },
  infoBoxValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  infoBoxSubtext: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  summaryBox: {
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  profitBox: {
    borderLeftWidth: 4,
    borderLeftColor: "#10B981",
  },
  lossBox: {
    borderLeftWidth: 4,
    borderLeftColor: "#EF4444",
  },
  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
    marginLeft: 8,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profitText: {
    color: "#10B981",
  },
  lossText: {
    color: "#EF4444",
  },
  summarySubtext: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  chartContainer: {
    backgroundColor: "#ffffff",
    margin: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
    textAlign: "center",
  },
  chartWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  chart: {
    borderRadius: 12,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500",
  },
});
