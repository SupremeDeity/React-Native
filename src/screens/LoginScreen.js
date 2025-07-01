import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }
        Alert.alert("Success", "Logged in successfully.");
        navigation.navigate("Main");
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
                    <TouchableOpacity
                        onPress={() => setRemember(!remember)}
                        style={styles.checkbox}
                    >
                        {remember && <View style={styles.checkboxChecked} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Stay logged in</Text>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f9fafb",
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
