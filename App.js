// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { Carousel } from 'react-native-snap-carousel'; // ✅ CORRECT

// const { width: screenWidth } = Dimensions.get('window');

// const data = [
//   { title: 'Slide 1', backgroundColor: '#FF6B6B' },
//   { title: 'Slide 2', backgroundColor: '#6BCB77' },
//   { title: 'Slide 3', backgroundColor: '#4D96FF' },
// ];

// export default function App() {
//   const renderItem = ({ item }) => (
//     <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         loop={true}
//         autoplay={true}
//         autoplayInterval={2500}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   slide: {
//     borderRadius: 10,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   webview: {
//     flex: 1,
//   },
// });

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const data = [
  {
    title: "One Platform, Endless Possibilities for Your Business",
    subtitle:
      "From HRM, Finance, and CRM to Projects, Tickets, Orders, and Reports—streamline operations, boost collaboration, and stay in control with our all-in-one ERP.",
  },
  {
    title: "Manage Employee Profiles & Streamline Leave Management",
    subtitle: `✅ Maintain comprehensive employee records including personal details, designations, departments, and documents.

✅ Centralized access for HR to manage and update employee data securely.

✅ Employees can apply for leaves with a simple workflow.

✅ Managers receive notifications and can approve / reject requests.

✅ Auto - tracking of leave balances and history.`,
  },
  {
    title: "Visual CRM with Lead & Client Portfolio",
    subtitle: `✅ Kanban-style lead tracking from prospect to conversion.

✅ Manage client portfolios with associated projects, contracts, and invoices.

✅ Gain visibility into client lifecycle and engagement history.`,
  },
  {
    title: "Project & Task Management Simplified",
    subtitle: `✅ Create projects, break them into tasks, and assign them to team members.

✅ Monitor task progress, deadlines, and priority levels

✅ Enable team collaboration with comments and status updates.`,
  },
  {
    title: "Timesheet & Timelog Tracking",
    subtitle: `✅ Log working hours against tasks and projects.

✅ Track billable vs non-billable time.

✅ Generate accurate timesheets for payroll or invoicing.`,
  },
  {
    title: "Internal Messaging For Collaboration",
    subtitle: `✅ Team members can communicate instantly within the platform.

✅ Supports one-to-one or group conversations.

✅ Reduces reliance on external chat tools and improves coordination`,
  },
  {
    title: "Efficient Support Ticket Handling",
    subtitle: `✅ Create and assign tickets for internal or customer issues.

✅ Set priorities, track status, and resolve with full history visibility.

✅ Improve SLA compliance and team accountability.`,
  },
  {
    title: "Comprehensive Business Reports",
    subtitle: `✅ Get insights with finance, task, timelog, and timesheet reports.

✅ Export reports for analysis and performance tracking.

✅ Make informed decisions using real-time data visualizations`,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1500}
        autoPlayInterval={2500}
        renderItem={({ index }) => (
          <View style={styles.slide}>
            <Text style={styles.title}>{data[index].title}</Text>
            <Text style={styles.subtitle}>{data[index].subtitle}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CDDCDC",
  },
  slide: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});

// import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';

// export default function App() {
//   return <AppNavigator />;
// }

// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const { width: screenWidth } = Dimensions.get('window');

// const data = [
//   { title: 'Slide 1', backgroundColor: '#FF6B6B' },
//   { title: 'Slide 2', backgroundColor: '#6BCB77' },
//   { title: 'Slide 3', backgroundColor: '#4D96FF' },
// ];

// export default function App() {
//   const renderItem = ({ item }) => (
//     <View style={[styles.item, { backgroundColor: item.backgroundColor }]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         loop={true}
//         autoplay={true}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     borderRadius: 10,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
