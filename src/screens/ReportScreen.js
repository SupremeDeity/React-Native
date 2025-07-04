import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function ReportScreen({ route }) {
  const { reportName } = route.params;

  // Dummy random data generator
  const generateRandomData = () =>
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: generateRandomData(),
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{reportName}</Text>
      <LineChart
        data={chartData}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#1E2923",
          backgroundGradientFrom: "#08130D",
          backgroundGradientTo: "#1F1F1F",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#111827",
    flex: 1,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginVertical: 20,
    alignSelf: "center",
  },
});
