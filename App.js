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
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";

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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpText}>Log in</Text>
          </TouchableOpacity>
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
            Don't have an account yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={styles.signUpText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.homeContainer}>
        <Image style={styles.iconLarge} source={require('./assets/adaptive-icon.png')} />
        <Text style={styles.homeAppName}>Scit Forte</Text>
        <Text style={styles.homeTagline}>
          All-in-one platform for HRM, CRM, Projects, and more.
        </Text>
        <Carousel
          loop
          width={width}
          height={height * 0.45}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1500}
          autoPlayInterval={2500}
          renderItem={({ index }) => (
            <View style={styles.homeCard}>
              <Text style={styles.homeCardTitle}>{data[index].title}</Text>
              <Text style={styles.homeCardSubtitle}>{data[index].subtitle}</Text>
            </View>
          )}
        />
        <Pressable
          style={styles.homeBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.homeBtnText}>Get Started</Text>
        </Pressable>
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

        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
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
  icon: {
    width: 64,
    height: 64,
    marginBottom: 20,
  },
  homeContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#F1F5F9",
  },
  iconLarge: {
    width: 80,
    height: 80,
    marginBottom: 18,
  },
  homeAppName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 6,
    letterSpacing: 1,
  },
  homeTagline: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 24,
    textAlign: "center",
    maxWidth: 320,
  },
  homeCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    marginHorizontal: 16,
    elevation: 4,
    minHeight: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  homeCardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 14,
    textAlign: "center",
  },
  homeCardSubtitle: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
    textAlign: "center",
  },
  homeBtn: {
    backgroundColor: "#98081D",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignSelf: "center",
    elevation: 2,
    marginBottom: 48,
  },
  homeBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});