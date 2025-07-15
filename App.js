// import { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Ionicons as Icon } from "@expo/vector-icons";

// import HomeScreen from "./src/screens/HomeScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignUpScreen from "./src/screens/SignupScreen";
// import EmployeeDashboard from "./src/screens/EmployeeDashboard";
// import ReportScreen from "./src/screens/ReportScreen";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const drawerItems = [
//   { name: "Dashboard", icon: "home-outline" },
//   {
//     name: "Reports",
//     icon: "stats-chart-outline",
//     subItems: [
//       "Project Overview Report",
//       "Task Report",
//       "Time Log Report",
//       "Finance Report",
//       "Income Vs Expense",
//       "Leave Report",
//       "Attendance Report",
//       "Expense Report",
//       "Lead Report",
//       "Sales Report",
//     ],
//   },
// ];

// function CustomDrawerContent(props) {
//   const [expanded, setExpanded] = useState({ Reports: {} });
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleExpand = (name) => {
//     setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   return (
//     <DrawerContentScrollView {...props} style={styles.drawerScroll}>
//       <View style={styles.logoBox}>
//         <Image source={require("./assets/logo.png")} style={styles.logo} />
//       </View>

//       {drawerItems.map((item, index) => (
//         <View key={index}>
//           <TouchableOpacity
//             style={styles.drawerItem}
//             onPress={() => {
//               if (item.subItems) {
//                 toggleExpand(item.name);
//               } else {
//                 if (item.name === "Dashboard") {
//                   props.navigation.navigate("AppStack", {
//                     screen: "Main",
//                     params: { screen: "EmployeeDashboard" },
//                   });
//                 } else {
//                   props.navigation.navigate(item.name);
//                 }
//               }
//             }}
//           >
//             <Icon
//               name={item.icon}
//               size={20}
//               color="#fff"
//               style={styles.drawerIcon}
//             />
//             {!collapsed && (
//               <>
//                 <Text style={styles.drawerLabel}>{item.name}</Text>
//                 {item.subItems && (
//                   <Icon
//                     name={"menu"}
//                     size={18}
//                     color="#fff"
//                     style={{ marginLeft: "auto" }}
//                   />
//                 )}
//               </>
//             )}
//           </TouchableOpacity>

//           {!collapsed &&
//             expanded[item.name] &&
//             item.subItems?.map((sub, i) => (
//               <TouchableOpacity
//                 key={i}
//                 style={styles.drawerSubItem}
//                 onPress={() =>
//                   props.navigation.navigate("AppStack", {
//                     screen: "Main",
//                     params: { screen: sub, params: { reportName: sub } },
//                   })
//                 }
//               >
//                 <Text style={styles.drawerSubLabel}>{sub}</Text>
//               </TouchableOpacity>
//             ))}

//         </View>
//       ))}
//     </DrawerContentScrollView>
//   );
// }

// const reportNames = [
//   "Project Overview Report",
//   "Task Report",
//   "Time Log Report",
//   "Finance Report",
//   "Income Vs Expense",
//   "Leave Report",
//   "Attendance Report",
//   "Expense Report",
//   "Lead Report",
//   "Sales Report",
// ];

// function MainStack({ navigation }) {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: true }}>
//       <Stack.Screen
//         name="EmployeeDashboard"
//         component={EmployeeDashboard}
//         options={{
//           title: "Dashboard",
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ paddingLeft: 20 }}>
//               <Icon name="menu-outline" size={28} color="#000" />
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       {reportNames.map((report) => (
//         <Stack.Screen
//           key={report}
//           name={report}
//           component={ReportScreen}
//           initialParams={{ reportName: report }}
//           options={{
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ paddingHorizontal: 20 }}>
//                 <Icon name="menu-outline" size={28} color="#000" />
//               </TouchableOpacity>
//             ),
//           }}
//         />
//       ))}
//     </Stack.Navigator>
//   );
// }

// function AppStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: true }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Sign Up" component={SignUpScreen} />
//       <Stack.Screen
//         name="Main"
//         component={MainStack}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{ headerShown: false }}
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Drawer.Screen name="AppStack" component={AppStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   drawerScroll: { backgroundColor: "#111827" },
//   logoBox: {
//     padding: 16,
//     flexDirection: "row",
//     alignItems: "center",
//     borderBottomWidth: 1,
//     borderBottomColor: "#1f2937",
//   },
//   logo: {
//     width: 100,
//     height: 50,
//     marginRight: 10,
//   },
//   drawerItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#1f2937",
//   },
//   drawerIcon: {
//     marginRight: 20,
//   },
//   drawerLabel: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   drawerSubItem: {
//     paddingLeft: 60,
//     paddingVertical: 10,
//   },
//   drawerSubLabel: {
//     color: "#ffffff",
//     fontSize: 14,
//   },
// });






import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignupScreen";
import EmployeeDashboard from "./src/screens/EmployeeDashboard";
import ReportScreen from "./src/screens/ReportScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const drawerItems = [
  { name: "Dashboard", icon: "home-outline" },
  {
    name: "Reports",
    icon: "stats-chart-outline",
    subItems: [
      "Project Overview Report",
      "Task Report",
      "Time Log Report",
      "Finance Report",
      "Income Vs Expense",
      "Leave Report",
      "Attendance Report",
      "Expense Report",
      "Lead Report",
      "Sales Report",
    ],
  },
];

function CustomDrawerContent(props) {
  const [expanded, setExpanded] = useState({ Reports: {} });
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const getActiveRoute = () => {
    const state = props.state;
    const drawerIndex = state.index;
    const mainStack = state.routes[drawerIndex];
    const mainStackState = mainStack?.state;
    const nestedIndex = mainStackState?.index || 0;
    return mainStackState?.routes?.[nestedIndex]?.name;
  };

  const activeRoute = getActiveRoute();

  return (
    <DrawerContentScrollView {...props} style={styles.drawerScroll}>
      <View style={styles.logoBox}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
      </View>

      {drawerItems.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => {
              if (item.subItems) {
                toggleExpand(item.name);
              } else {
                if (item.name === "Dashboard") {
                  props.navigation.navigate("AppStack", {
                    screen: "Main",
                    params: { screen: "EmployeeDashboard" },
                  });
                } else {
                  props.navigation.navigate(item.name);
                }
              }
            }}
          >
            <Icon
              name={item.icon}
              size={20}
              color="#fff"
              style={styles.drawerIcon}
            />
            {!collapsed && (
              <>
                <Text style={styles.drawerLabel}>{item.name}</Text>
                {item.subItems && (
                  <Icon
                    name={"menu"}
                    size={18}
                    color="#fff"
                    style={{ marginLeft: "auto" }}
                  />
                )}
              </>
            )}
          </TouchableOpacity>

          {!collapsed &&
            expanded[item.name] &&
            item.subItems?.map((sub, i) => {
              const isActive = activeRoute === sub;
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.drawerSubItem,
                    isActive && styles.activeSubItem,
                  ]}
                  onPress={() =>
                    props.navigation.navigate("AppStack", {
                      screen: "Main",
                      params: { screen: sub, params: { reportName: sub } },
                    })
                  }
                >
                  <Text
                    style={[
                      styles.drawerSubLabel,
                      isActive && styles.activeSubLabel,
                    ]}
                  >
                    {sub}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      ))}
    </DrawerContentScrollView>
  );
}

const reportNames = [
  "Project Overview Report",
  "Task Report",
  "Time Log Report",
  "Finance Report",
  "Income Vs Expense",
  "Leave Report",
  "Attendance Report",
  "Expense Report",
  "Lead Report",
  "Sales Report",
];

function MainStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="EmployeeDashboard"
        component={EmployeeDashboard}
        options={{
          title: "Dashboard",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ paddingLeft: 20 }}
            >
              <Icon name="menu-outline" size={28} color="#000" />
            </TouchableOpacity>
          ),
        }}
      />
      {reportNames.map((report) => (
        <Stack.Screen
          key={report}
          name={report}
          component={ReportScreen}
          initialParams={{ reportName: report }}
          options={{
            title: report,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ paddingHorizontal: 20 }}
              >
                <Icon name="menu-outline" size={28} color="#000" />
              </TouchableOpacity>
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="AppStack" component={AppStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerScroll: { backgroundColor: "#111827" },
  logoBox: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  logo: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  drawerIcon: {
    marginRight: 20,
  },
  drawerLabel: {
    color: "#fff",
    fontSize: 16,
  },
  drawerSubItem: {
    paddingLeft: 60,
    paddingVertical: 10,
  },
  drawerSubLabel: {
    color: "#ffffff",
    fontSize: 14,
  },
  activeSubItem: {
    backgroundColor: "#1f2937",
    borderLeftWidth: 4,
    borderLeftColor: "#3b82f6",
  },
  activeSubLabel: {
    color: "#3b82f6",
    fontWeight: "bold",
  },
});














import TaskReportScreen from "./src/screens/Reports/TaskReportScreen";
import TimeLogReportScreen from "./src/screens/Reports/TimeLogReportScreen";
import FinanceReportScreen from "./src/screens/Reports/FinanceReportScreen";