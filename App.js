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























// import React from "react";
// import { View, Text, StyleSheet, Dimensions, Button, Pressable } from "react-native";
// import Carousel from "react-native-reanimated-carousel";

// const { width } = Dimensions.get("window");

// const data = [
//   {
//     title: "One Platform, Endless Possibilities for Your Business",
//     subtitle:
//       "From HRM, Finance, and CRM to Projects, Tickets, Orders, and Reports—streamline operations, boost collaboration, and stay in control with our all-in-one ERP.",
//   },
//   {
//     title: "Manage Employee Profiles & Streamline Leave Management",
//     subtitle: `✅ Maintain comprehensive employee records including personal details, designations, departments, and documents.

// ✅ Centralized access for HR to manage and update employee data securely.

// ✅ Employees can apply for leaves with a simple workflow.

// ✅ Managers receive notifications and can approve / reject requests.

// ✅ Auto - tracking of leave balances and history.`,
//   },
//   {
//     title: "Visual CRM with Lead & Client Portfolio",
//     subtitle: `✅ Kanban-style lead tracking from prospect to conversion.

// ✅ Manage client portfolios with associated projects, contracts, and invoices.

// ✅ Gain visibility into client lifecycle and engagement history.`,
//   },
//   {
//     title: "Project & Task Management Simplified",
//     subtitle: `✅ Create projects, break them into tasks, and assign them to team members.

// ✅ Monitor task progress, deadlines, and priority levels

// ✅ Enable team collaboration with comments and status updates.`,
//   },
//   {
//     title: "Timesheet & Timelog Tracking",
//     subtitle: `✅ Log working hours against tasks and projects.

// ✅ Track billable vs non-billable time.

// ✅ Generate accurate timesheets for payroll or invoicing.`,
//   },
//   {
//     title: "Internal Messaging For Collaboration",
//     subtitle: `✅ Team members can communicate instantly within the platform.

// ✅ Supports one-to-one or group conversations.

// ✅ Reduces reliance on external chat tools and improves coordination`,
//   },
//   {
//     title: "Efficient Support Ticket Handling",
//     subtitle: `✅ Create and assign tickets for internal or customer issues.

// ✅ Set priorities, track status, and resolve with full history visibility.

// ✅ Improve SLA compliance and team accountability.`,
//   },
//   {
//     title: "Comprehensive Business Reports",
//     subtitle: `✅ Get insights with finance, task, timelog, and timesheet reports.

// ✅ Export reports for analysis and performance tracking.

// ✅ Make informed decisions using real-time data visualizations`,
//   },
// ];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Carousel
//         loop
//         width={width}
//         height={250}
//         autoPlay={true}
//         data={data}
//         scrollAnimationDuration={1500}
//         autoPlayInterval={2500}
//         renderItem={({ index }) => (
//           <View style={styles.slide}>
//             <Text style={styles.title}>{data[index].title}</Text>
//             <Text style={styles.subtitle}>{data[index].subtitle}</Text>
//           </View>
//         )}
//       />
//       <Pressable style={styles.btn}>
//         <Text style={styles.btnText}>Get Started</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#CDDCDC",
//   },
//   slide: {
//     borderRadius: 10,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 10,
//     gap: 24,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 16,
//   },
//   btn: {
//     backgroundColor: "#98081D",
//     borderRadius: "4.8px",
//   },
//   btnText: {
//     color: "#fff",
//     padding: 16,
//     fontSize: 14,
//     fontWeight: "bold",
//   }
// });










// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import Carousel from "react-native-reanimated-carousel";

// const { width, height } = Dimensions.get("window");

// const data = [
//   {
//     title: "One Platform, Endless Possibilities for Your Business",
//     subtitle:
//       "From HRM, Finance, and CRM to Projects, Tickets, Orders, and Reports—streamline operations, boost collaboration, and stay in control with our all-in-one ERP.",
//   },
//   {
//     title: "Manage Employee Profiles & Streamline Leave Management",
//     subtitle: `✅ Maintain employee records\n✅ Leave workflow & approvals\n✅ Auto-tracking balances`,
//   },
//   {
//     title: "Visual CRM with Lead & Client Portfolio",
//     subtitle: `✅ Kanban lead tracking\n✅ Client portfolio with contracts\n✅ Full engagement visibility`,
//   },
//   {
//     title: "Project & Task Management Simplified",
//     subtitle: `✅ Create & assign tasks\n✅ Track deadlines & priorities\n✅ Team collaboration`,
//   },
//   {
//     title: "Timesheet & Timelog Tracking",
//     subtitle: `✅ Log hours to tasks/projects\n✅ Billable vs non-billable\n✅ Payroll-ready reports`,
//   },
//   {
//     title: "Internal Messaging For Collaboration",
//     subtitle: `✅ Instant team messaging\n✅ Group & private chats\n✅ No external tools needed`,
//   },
//   {
//     title: "Efficient Support Ticket Handling",
//     subtitle: `✅ Create/assign tickets\n✅ Track status & history\n✅ Boost SLA compliance`,
//   },
//   {
//     title: "Comprehensive Business Reports",
//     subtitle: `✅ Finance & task reports\n✅ Export & analyze\n✅ Real-time insights`,
//   },
// ];

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <View style={styles.container}>
//         <Text style={styles.appName}>ERP Master</Text>

//         <Carousel
//           loop
//           width={width}
//           height={height * 0.7} // Adjusted to occupy 70% of the screen height
//           autoPlay={true}
//           data={data}
//           scrollAnimationDuration={1500}
//           autoPlayInterval={2500}
//           renderItem={({ index }) => (
//             <View style={styles.card}>
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Text style={styles.title}>{data[index].title}</Text>
//                 <Text style={styles.subtitle}>{data[index].subtitle}</Text>
//               </ScrollView>

//               {/* "Get Started" button inside the carousel container */}
//               <Pressable style={styles.btn}>
//                 <Text style={styles.btnText}>Get Started</Text>
//               </Pressable>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#F1F5F9",
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     justifyContent: "center", // Centers vertically
//     alignItems: "center", // Centers horizontally
//   },
//   appName: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#1E293B",
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: "#fff",
//     // Apply border radius only on the top corners
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 20,
//     marginHorizontal: 12,
//     width: width - 32,
//     height: height * 0.7, // 70% of the screen height
//     justifyContent: "flex-end", // Pushes the button to the bottom
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#111827",
//     marginBottom: 12,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#374151",
//     lineHeight: 22,
//   },
//   btn: {
//     backgroundColor: "#98081D",
//     borderRadius: 10,
//     paddingVertical: 14,
//     paddingHorizontal: 32,
//     marginTop: 12,
//     alignSelf: "center", // Centers the button horizontally
//     position: "absolute", // To place it inside the card
//     bottom: 20, // Makes it stick to the bottom inside the carousel container
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });





// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Pressable,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// // Create Stack navigator
// const Stack = createStackNavigator();
// const { width, height } = Dimensions.get("window");

// const data = [
//   {
//     title: "One Platform, Endless Possibilities for Your Business",
//     subtitle:
//       "From HRM, Finance, and CRM to Projects, Tickets, Orders, and Reports—streamline operations, boost collaboration, and stay in control with our all-in-one ERP.",
//   },
//   {
//     title: "Manage Employee Profiles & Streamline Leave Management",
//     subtitle: `✅ Maintain employee records\n✅ Leave workflow & approvals\n✅ Auto-tracking balances`,
//   },
//   {
//     title: "Visual CRM with Lead & Client Portfolio",
//     subtitle: `✅ Kanban lead tracking\n✅ Client portfolio with contracts\n✅ Full engagement visibility`,
//   },
//   {
//     title: "Project & Task Management Simplified",
//     subtitle: `✅ Create & assign tasks\n✅ Track deadlines & priorities\n✅ Team collaboration`,
//   },
//   {
//     title: "Timesheet & Timelog Tracking",
//     subtitle: `✅ Log hours to tasks/projects\n✅ Billable vs non-billable\n✅ Payroll-ready reports`,
//   },
//   {
//     title: "Internal Messaging For Collaboration",
//     subtitle: `✅ Instant team messaging\n✅ Group & private chats\n✅ No external tools needed`,
//   },
//   {
//     title: "Efficient Support Ticket Handling",
//     subtitle: `✅ Create/assign tickets\n✅ Track status & history\n✅ Boost SLA compliance`,
//   },
//   {
//     title: "Comprehensive Business Reports",
//     subtitle: `✅ Finance & task reports\n✅ Export & analyze\n✅ Real-time insights`,
//   },
// ];

// function LoginScreen() {
//   return (
//     <View style={styles.loginContainer}>
//       <Text style={styles.loginText}>Welcome to Login Page</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={styles.safe}>
//       <View style={styles.container}>
//         <Text style={styles.appName}>ERP Master</Text>

//         <Carousel
//           loop
//           width={width}
//           height={height * 0.7}
//           autoPlay={true}
//           data={data}
//           scrollAnimationDuration={1500}
//           autoPlayInterval={2500}
//           renderItem={({ index }) => (
//             <View style={styles.card}>
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Text style={styles.title}>{data[index].title}</Text>
//                 <Text style={styles.subtitle}>{data[index].subtitle}</Text>
//               </ScrollView>

//               {/* "Get Started" button inside the carousel container */}
//               <Pressable
//                 style={styles.btn}
//                 onPress={() => navigation.navigate("Login")}
//               >
//                 <Text style={styles.btnText}>Get Started</Text>
//               </Pressable>
//             </View>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#F1F5F9",
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     justifyContent: "flex-start", // Align to the top
//     alignItems: "center",
//   },
//   appName: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#1E293B",
//     marginTop: 16, // Add a bit of space from the top
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 20,
//     marginHorizontal: 12,
//     width: width - 32,
//     height: height * 0.7,
//     justifyContent: "flex-end",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#111827",
//     marginBottom: 12,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#374151",
//     lineHeight: 22,
//   },
//   btn: {
//     backgroundColor: "#98081D",
//     borderRadius: 10,
//     paddingVertical: 14,
//     paddingHorizontal: 32,
//     marginTop: 12,
//     alignSelf: "center",
//     position: "absolute",
//     bottom: 20,
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   loginContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loginText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#1E293B",
//   },
// });








import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const { width, height } = Dimensions.get("window");

const data = [
  {
    title: "One Platform, Endless Possibilities for Your Business",
    subtitle:
      "From HRM, Finance, and CRM to Projects, Tickets, Orders, and Reports—streamline operations, boost collaboration, and stay in control with our all-in-one ERP.",
  },
  {
    title: "Manage Employee Profiles & Streamline Leave Management",
    subtitle: `✅ Maintain employee records\n✅ Leave workflow & approvals\n✅ Auto-tracking balances`,
  },
  {
    title: "Visual CRM with Lead & Client Portfolio",
    subtitle: `✅ Kanban lead tracking\n✅ Client portfolio with contracts\n✅ Full engagement visibility`,
  },
  {
    title: "Project & Task Management Simplified",
    subtitle: `✅ Create & assign tasks\n✅ Track deadlines & priorities\n✅ Team collaboration`,
  },
  {
    title: "Timesheet & Timelog Tracking",
    subtitle: `✅ Log hours to tasks/projects\n✅ Billable vs non-billable\n✅ Payroll-ready reports`,
  },
  {
    title: "Internal Messaging For Collaboration",
    subtitle: `✅ Instant team messaging\n✅ Group & private chats\n✅ No external tools needed`,
  },
  {
    title: "Efficient Support Ticket Handling",
    subtitle: `✅ Create/assign tickets\n✅ Track status & history\n✅ Boost SLA compliance`,
  },
  {
    title: "Comprehensive Business Reports",
    subtitle: `✅ Finance & task reports\n✅ Export & analyze\n✅ Real-time insights`,
  },
];
function SignUpScreen({ navigation }) {
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!companyName || !name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    Alert.alert("Success", "Signed up successfully.");
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.headerText}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Company Name"
          value={companyName}
          onChangeText={setCompanyName}
        />

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signUpText}>Log in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    // Simulate login success (use your own API for real-world scenarios)
    Alert.alert("Success", "Logged in successfully.");
    navigation.navigate("Home"); // Navigate after successful login
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.headerText}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setRemember(!remember)} style={styles.checkbox}>
            {remember && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Stay logged in</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account yet?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.appName}>ERP Master</Text>

        <Carousel
          loop
          width={width}
          height={height * 0.7}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1500}
          autoPlayInterval={2500}
          renderItem={({ index }) => (
            <View style={styles.card}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{data[index].title}</Text>
                <Text style={styles.subtitle}>{data[index].subtitle}</Text>
              </ScrollView>

              <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.btnText}>Get Started</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },
  container: {
    flex: 1,
    justifyContent: "center", // This centers the loginBox vertically
    alignItems: "center", // This centers the loginBox horizontally
    paddingHorizontal: 16,
  },
  appName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 6,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    marginHorizontal:23,
    width: width - 44,
    height: height * 0.7,
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 22,
  },
  btn: {
    backgroundColor: "#98081D",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginTop: 12,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
    maxWidth: 560,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#f7f7f7",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#c7c7c7",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: "#3a8dff",
    borderRadius: 3,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#666",
  },
  loginButton: {
    backgroundColor: "#98081D",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  signUpText: {
    color: "#3a8dff",
    fontWeight: "bold",
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
