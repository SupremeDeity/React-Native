import React, { useEffect } from 'react';
import { View, Text, Image, Pressable, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');

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

export default function HomeScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.homeContainer}>
                <Image
                    style={styles.iconLarge}
                    source={require('../../assets/adaptive-icon.png')}
                />
                <Text style={styles.homeAppName}>Scit Forte</Text>
                <Text style={styles.homeTagline}>
                    All-in-one platform for HRM, CRM, Projects, and more.
                </Text>
                <Carousel
                    loop
                    width={width}
                    height={height * 0.45}
                    autoPlay
                    data={data}
                    scrollAnimationDuration={1500}
                    autoPlayInterval={2500}
                    renderItem={({ index }) => (
                        <View style={styles.homeCard}>
                            <Text style={styles.homeCardTitle}>{data[index].title}</Text>
                            <Text style={styles.homeCardSubtitle}>
                                {data[index].subtitle}
                            </Text>
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

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    iconLarge: {
        width: 80,
        height: 80,
        marginBottom: 18,
    },
    homeContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: "#F1F5F9",
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
