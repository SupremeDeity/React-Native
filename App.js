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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const { width, height } = Dimensions.get("window");

const drawerItems = [
  { name: "Dashboard", icon: "home-outline" },
  {
    name: "HR",
    icon: "people-outline",
    subItems: ["Employees", "Attendance", "Leave Requests"],
  },
  {
    name: "Work",
    icon: "briefcase-outline",
    subItems: ["Projects", "Tasks"],
  },
  { name: "Tickets", icon: "headset-outline" },
  { name: "Events", icon: "calendar-outline" },
  { name: "Messages", icon: "chatbubbles-outline" },
  { name: "Notice Board", icon: "clipboard-outline" },
  { name: "Google Meet", icon: "link-outline" },
  { name: "Settings", icon: "settings-outline" },
];



function CustomDrawerContent(props) {
  const [expanded, setExpanded] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

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
                props.navigation.navigate(item.name);
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
            item.subItems?.map((sub, i) => (
              <TouchableOpacity
                key={i}
                style={styles.drawerSubItem}
                onPress={() => props.navigation.navigate(sub)}
              >
                <Text style={styles.drawerSubLabel}>{sub}</Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </DrawerContentScrollView>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={EmployeeDashboard} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

// headerTitle: "",
//   headerLeft: () => (
//     <TouchableOpacity
//       onPress={() => navigation.openDrawer()}
//       style={{ paddingLeft: 20 }}
//     >
//       <Icon name="menu-outline" size={28} color="#000" />
//     </TouchableOpacity>
//   ),

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
});
