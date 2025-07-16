import { View, Text, StyleSheet } from "react-native";
import TaskReportScreen from "./Reports/TaskReportScreen";
import TimeLogReportScreen from "./Reports/TimeLogReportScreen";
import FinanceReportScreen from "./Reports/FinanceReportScreen";
import SalesReportScreen from "./Reports/SalesReportScreen";
import LeadReportScreen from "./Reports/LeadReportScreen";
import ProjectOverviewReportScreen from "./Reports/ProjectOverviewReportScreen";
import ExpenseReportScreen from "./Reports/ExpenseReportScreen";
import AttendanceReportScreen from "./Reports/AttendanceReportScreen";
import LeaveReportScreen from "./Reports/LeaveReportScreen";
import IncomeVsExpenseReportScreen from "./Reports/IncomeVsExpenseReportScreen";

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
        return <SalesReportScreen />;
      case "Lead Report":
        return <LeadReportScreen />;
      case "Project Overview Report":
        return <ProjectOverviewReportScreen />;
      case "Expense Report":
        return <ExpenseReportScreen />;
      case "Attendance Report":
        return <AttendanceReportScreen />;
      case "Leave Report":
        return <LeaveReportScreen />;
      case "Income Vs Expense":
        return <IncomeVsExpenseReportScreen />;
      default:
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
