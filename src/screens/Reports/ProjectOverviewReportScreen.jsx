import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Sample data for the Project Overview Report
const overviewData = {
  totalProjects: 24,
  projectManagers: 8,
  totalUsers: 156,
  completionRate: 72.5,
};

const projectStatusData = [
  { name: 'Approved', count: 15, color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Pending', count: 6, color: '#FF9800', legendFontColor: '#7F7F7F', legendFontSize: 12 },
  { name: 'Rejected', count: 3, color: '#F44336', legendFontColor: '#7F7F7F', legendFontSize: 12 },
];

const departmentData = [
  { department: 'Controlling', users: 12, projects: 3 },
  { department: 'Distribution', users: 18, projects: 5 },
  { department: 'Infra', users: 8, projects: 2 },
  { department: 'InfoSec', users: 15, projects: 4 },
  { department: 'BI', users: 6, projects: 2 },
  { department: 'Application', users: 22, projects: 6 },
  { department: 'Legal & IP', users: 4, projects: 1 },
  { department: 'Regulatory', users: 7, projects: 2 },
  { department: 'HR', users: 14, projects: 3 },
  { department: 'Dist Ops', users: 11, projects: 2 },
];

const portfolioManagers = [
  {
    id: 1,
    name: 'John Smith',
    avatar: 'https://i.pravatar.cc/40?img=1',
    divisionCovered: 'Technology',
    departmentCovered: 'IT, InfoSec',
    projectsAssigned: 12,
    projectsApproved: 10,
    projectsNotApproved: 2,
    overallProgress: 85,
    userAssigned: 45,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/40?img=2',
    divisionCovered: 'Operations',
    departmentCovered: 'HR, Distribution',
    projectsAssigned: 8,
    projectsApproved: 6,
    projectsNotApproved: 2,
    overallProgress: 75,
    userAssigned: 32,
  },
];

const programManagers = [
  {
    id: 1,
    name: 'Mike Davis',
    avatar: 'https://i.pravatar.cc/40?img=3',
    division: 'Technology',
    department: 'Application',
    totalProjects: 6,
    approved: 5,
    notApproved: 1,
    archived: 0,
    urs: 2,
    goLive: 1,
    development: 2,
    uat: 1,
    totalProgress: 80,
    userAssigned: 18,
  },
  {
    id: 2,
    name: 'Lisa Chen',
    avatar: 'https://i.pravatar.cc/40?img=4',
    division: 'Operations',
    department: 'Controlling',
    totalProjects: 4,
    approved: 3,
    notApproved: 1,
    archived: 0,
    urs: 1,
    goLive: 1,
    development: 1,
    uat: 1,
    totalProgress: 90,
    userAssigned: 12,
  },
];

const projectManagers = [
  {
    id: 1,
    name: 'Alex Brown',
    avatar: 'https://i.pravatar.cc/40?img=5',
    division: 'Technology',
    department: 'Infra',
    totalProjects: 3,
    assignedTasks: 15,
    progress: 65,
    userAssigned: 8,
  },
  {
    id: 2,
    name: 'Emily Wilson',
    avatar: 'https://i.pravatar.cc/40?img=6',
    division: 'Legal',
    department: 'Legal & IP',
    totalProjects: 2,
    assignedTasks: 8,
    progress: 90,
    userAssigned: 4,
  },
];

export default function ProjectOverviewReportScreen() {
  const [activeTab, setActiveTab] = useState('overview');

  const InfoBox = ({ title, value, subtitle }) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoValue}>{value}</Text>
      {subtitle && <Text style={styles.infoSubtitle}>{subtitle}</Text>}
    </View>
  );

  const renderPortfolioManager = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.managerCell}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.managerName}>{item.name}</Text>
      </View>
      <Text style={styles.tableCell}>{item.divisionCovered}</Text>
      <Text style={styles.tableCell}>{item.departmentCovered}</Text>
      <Text style={styles.tableCell}>{item.projectsAssigned}</Text>
      <Text style={styles.tableCell}>{item.projectsApproved}</Text>
      <Text style={styles.tableCell}>{item.projectsNotApproved}</Text>
      <Text style={styles.tableCell}>{item.overallProgress}%</Text>
      <Text style={styles.tableCell}>{item.userAssigned}</Text>
    </View>
  );

  const renderProgramManager = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.managerCell}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.managerName}>{item.name}</Text>
      </View>
      <Text style={styles.tableCell}>{item.division}</Text>
      <Text style={styles.tableCell}>{item.department}</Text>
      <Text style={styles.tableCell}>{item.totalProjects}</Text>
      <Text style={styles.tableCell}>{item.approved}</Text>
      <Text style={styles.tableCell}>{item.notApproved}</Text>
      <Text style={styles.tableCell}>{item.archived}</Text>
      <Text style={styles.tableCell}>{item.urs}</Text>
      <Text style={styles.tableCell}>{item.goLive}</Text>
      <Text style={styles.tableCell}>{item.development}</Text>
      <Text style={styles.tableCell}>{item.uat}</Text>
      <Text style={styles.tableCell}>{item.totalProgress}%</Text>
      <Text style={styles.tableCell}>{item.userAssigned}</Text>
    </View>
  );

  const renderProjectManager = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.managerCell}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.managerName}>{item.name}</Text>
      </View>
      <Text style={styles.tableCell}>{item.division}</Text>
      <Text style={styles.tableCell}>{item.department}</Text>
      <Text style={styles.tableCell}>{item.totalProjects}</Text>
      <Text style={styles.tableCell}>{item.assignedTasks}</Text>
      <Text style={styles.tableCell}>{item.progress}%</Text>
      <Text style={styles.tableCell}>{item.userAssigned}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topBar}>
        <Text style={styles.breadcrumb}>Home &gt; Project Overview Report</Text>
        <TouchableOpacity style={styles.exportButtonTop}>
          <Text style={styles.exportText}>Export Report</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
          onPress={() => setActiveTab('overview')}
        >
          <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'portfolio' && styles.activeTab]}
          onPress={() => setActiveTab('portfolio')}
        >
          <Text style={[styles.tabText, activeTab === 'portfolio' && styles.activeTabText]}>
            Portfolio Managers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'program' && styles.activeTab]}
          onPress={() => setActiveTab('program')}
        >
          <Text style={[styles.tabText, activeTab === 'program' && styles.activeTabText]}>
            Program Managers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'project' && styles.activeTab]}
          onPress={() => setActiveTab('project')}
        >
          <Text style={[styles.tabText, activeTab === 'project' && styles.activeTabText]}>
            Project Managers
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'overview' && (
        <>
          {/* Information Boxes */}
          <View style={styles.infoBoxContainer}>
            <InfoBox title="Total Projects" value={overviewData.totalProjects} />
            <InfoBox title="Project Managers" value={overviewData.projectManagers} />
            <InfoBox title="Total Users" value={overviewData.totalUsers} />
            <InfoBox 
              title="Completion Rate" 
              value={`${overviewData.completionRate}%`} 
              subtitle="Average across all projects"
            />
          </View>

          {/* Charts Section */}
          <View style={styles.chartsContainer}>
            {/* Pie Chart - Project Status Distribution */}
            <View style={styles.chartBox}>
              <Text style={styles.chartTitle}>Project Status Distribution</Text>
              <PieChart
                data={projectStatusData}
                width={screenWidth - 40}
                height={220}
                chartConfig={{
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="count"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
              />
            </View>

            {/* Bar Chart - Department Wise */}
            <View style={styles.chartBox}>
              <Text style={styles.chartTitle}>Department Wise Users vs Projects</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.customBarChart}>
                  {departmentData.map((item, index) => (
                    <View key={index} style={styles.barGroup}>
                      <Text style={styles.departmentLabel}>{item.department}</Text>
                      <View style={styles.barsContainer}>
                        <View style={styles.barWrapper}>
                          <View 
                            style={[
                              styles.bar, 
                              styles.userBar, 
                              { height: (item.users / 25) * 120 }
                            ]} 
                          />
                          <Text style={styles.barValue}>{item.users}</Text>
                        </View>
                        <View style={styles.barWrapper}>
                          <View 
                            style={[
                              styles.bar, 
                              styles.projectBar, 
                              { height: (item.projects / 10) * 120 }
                            ]} 
                          />
                          <Text style={styles.barValue}>{item.projects}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </ScrollView>
              <View style={styles.legend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: '#8664F4' }]} />
                  <Text>Users</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: '#FF6384' }]} />
                  <Text>Projects</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      )}

      {activeTab === 'portfolio' && (
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Portfolio Manager Overview</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Portfolio Manager</Text>
                <Text style={styles.tableHeaderCell}>Division Covered</Text>
                <Text style={styles.tableHeaderCell}>Department Covered</Text>
                <Text style={styles.tableHeaderCell}>Projects Assigned</Text>
                <Text style={styles.tableHeaderCell}>Projects Approved</Text>
                <Text style={styles.tableHeaderCell}>Projects Not Approved</Text>
                <Text style={styles.tableHeaderCell}>Overall Progress</Text>
                <Text style={styles.tableHeaderCell}>User Assigned</Text>
              </View>
              <FlatList
                data={portfolioManagers}
                renderItem={renderPortfolioManager}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {activeTab === 'program' && (
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Program Manager Overview</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Program Manager</Text>
                <Text style={styles.tableHeaderCell}>Division</Text>
                <Text style={styles.tableHeaderCell}>Department</Text>
                <Text style={styles.tableHeaderCell}>Total Projects</Text>
                <Text style={styles.tableHeaderCell}>Approved</Text>
                <Text style={styles.tableHeaderCell}>Not Approved</Text>
                <Text style={styles.tableHeaderCell}>Archived</Text>
                <Text style={styles.tableHeaderCell}>URS</Text>
                <Text style={styles.tableHeaderCell}>Go-Live</Text>
                <Text style={styles.tableHeaderCell}>Development</Text>
                <Text style={styles.tableHeaderCell}>UAT</Text>
                <Text style={styles.tableHeaderCell}>Total Progress</Text>
                <Text style={styles.tableHeaderCell}>User Assigned</Text>
              </View>
              <FlatList
                data={programManagers}
                renderItem={renderProgramManager}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {activeTab === 'project' && (
        <View style={styles.tableContainer}>
          <Text style={styles.tableTitle}>Project Manager Overview</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderCell}>Project Manager</Text>
                <Text style={styles.tableHeaderCell}>Division</Text>
                <Text style={styles.tableHeaderCell}>Department</Text>
                <Text style={styles.tableHeaderCell}>Total Projects</Text>
                <Text style={styles.tableHeaderCell}>Assigned Tasks</Text>
                <Text style={styles.tableHeaderCell}>Progress</Text>
                <Text style={styles.tableHeaderCell}>User Assigned</Text>
              </View>
              <FlatList
                data={projectManagers}
                renderItem={renderProjectManager}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </ScrollView>
        </View>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  breadcrumb: {
    color: '#666',
    fontSize: 14,
    flex: 1,
  },
  exportButtonTop: {
    backgroundColor: '#28a745',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  tabContainer: {
    fontSize: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    marginVertical: "auto",
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
  },
  infoBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  chartsContainer: {
    marginBottom: 20,
  },
  chartBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  customBarChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
    minWidth: screenWidth * 1.8,
  },
  barGroup: {
    alignItems: 'center',
    marginHorizontal: 8,
    minWidth: 60,
  },
  departmentLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
    transform: [{ rotate: '-45deg' }],
    width: 60,
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 140,
  },
  barWrapper: {
    alignItems: 'center',
    marginHorizontal: 2,
    justifyContent: 'flex-end',
    height: 140,
  },
  bar: {
    width: 16,
    borderRadius: 2,
    minHeight: 4,
  },
  userBar: {
    backgroundColor: '#8664F4',
  },
  projectBar: {
    backgroundColor: '#FF6384',
  },
  barValue: {
    fontSize: 8,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  tableHeaderCell: {
    minWidth: 120,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#495057',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f4',
  },
  tableCell: {
    minWidth: 120,
    fontSize: 12,
    color: '#495057',
    textAlign: 'center',
  },
  managerCell: {
    minWidth: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6,
  },
  managerName: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
  exportButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  exportText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
