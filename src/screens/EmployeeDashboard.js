import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons as Icon } from "@expo/vector-icons";

export default function EmployeeDashboard({ navigation }) {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [currentDay, setCurrentDay] = useState(
    new Date().toLocaleDateString(undefined, { weekday: 'long' })
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ paddingLeft: 20 }}
          >
            <Icon name="menu-outline" size={28} color="#000" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 20 }}>
            <Image style={styles.headerLogo} source={require("../../assets/adaptive-icon.png")} />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ScitForte</Text>
          </View>
          <View></View>
        </View>
      ),

    });
  }, [navigation]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDay(new Date().toLocaleDateString(undefined, { weekday: 'long' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome H M Junaid Arshad</Text>
      <View style={styles.timeRow}>
        <View>
          <Text style={styles.timeText}>{currentTime}</Text>
          <Text style={styles.dayText}>{currentDay}</Text>
        </View>
        <TouchableOpacity style={styles.clockInBtn}>
          <Icon name="enter" style={{ color: "#fff", fontSize: 18 }} />
          <Text style={styles.clockInBtnText}>Clock In</Text>
        </TouchableOpacity>
      </View>

      {/* Employee Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>H M Junaid Arshad</Text>
            <Text style={styles.profileTitle}>Junior full stack developer</Text>
            <Text style={styles.profileId}>Employee Id : EMP-13</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Open Tasks</Text>
            <Text style={styles.statValue}>224</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Projects</Text>
            <Text style={styles.statValue}>5</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Open Tickets</Text>
            <Text style={styles.statValue}>0</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F9FA',
    flex: 1,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    gap: 18,
    width: '100%',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#64748B',
  },
  clockInBtn: {
    backgroundColor: '#98081D',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  clockInBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  headerLogo: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  dayText: {
    fontSize: 16,
    color: '#98081D',
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    backgroundColor: '#E5E7EB',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  profileTitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  profileId: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
});
