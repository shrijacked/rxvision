import React from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {palette} from '../theme/palette';

const reminders = [
  {title: 'Amoxicillin 500mg', schedule: 'Today, 2:00 PM'},
  {title: 'Ibuprofen 200mg', schedule: 'Tomorrow, 9:00 AM'},
];

const recentScans = [
  {
    title: 'Dr. Smith - 2023-10-26',
    summary: 'Amoxicillin, Azithromycin',
  },
  {
    title: 'Dr. Jones - 2023-10-20',
    summary: 'Paracetamol, Ibuprofen',
  },
];

export const HomeScreen = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const colors = {
    background: isDarkMode ? palette.backgroundDark : palette.backgroundLight,
    surface: isDarkMode ? 'rgba(18,32,23,0.9)' : '#ffffff',
    mutedSurface: isDarkMode ? 'rgba(18,32,23,0.6)' : '#eef2f1',
    textPrimary: isDarkMode ? palette.textDark : palette.textLight,
    textSecondary: isDarkMode ? 'rgba(248,249,250,0.7)' : 'rgba(47,79,79,0.7)',
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.safeArea, {backgroundColor: colors.background}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View
            style={[
              styles.heroCard,
              isDarkMode ? styles.shadowDark : styles.shadowLight,
              {backgroundColor: colors.surface},
            ]}>
            <Text style={[styles.heroTitle, {color: colors.textPrimary}]}>
              Hello, Shrijak!
            </Text>
            <Text style={[styles.heroSubtitle, {color: colors.textSecondary}]}>
              Welcome back to your prescription dashboard.
            </Text>
            <Pressable style={styles.scanButton}>
              <MaterialIcons name="add-a-photo" size={30} color="#ffffff" />
              <Text style={styles.scanButtonText}>Scan New Prescription</Text>
            </Pressable>
          </View>

          <View
            style={[
              styles.sectionCard,
              isDarkMode ? styles.shadowDark : styles.shadowLight,
              {backgroundColor: colors.surface},
            ]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, {color: colors.textPrimary}]}>
                Upcoming Reminders
              </Text>
              <Pressable>
                <Text style={styles.sectionLink}>View All</Text>
              </Pressable>
            </View>
            {reminders.map(item => (
              <View
                key={item.title}
                style={[
                  styles.listItem,
                  {backgroundColor: colors.mutedSurface},
                ]}>
                <MaterialIcons name="alarm" size={28} color={palette.primary} />
                <View style={styles.listTextWrapper}>
                  <Text style={[styles.listTitle, {color: colors.textPrimary}]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.listSubtitle,
                      {color: colors.textSecondary},
                    ]}>
                    {item.schedule}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View
            style={[
              styles.sectionCard,
              isDarkMode ? styles.shadowDark : styles.shadowLight,
              {backgroundColor: colors.surface},
            ]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, {color: colors.textPrimary}]}>
                Recently Scanned
              </Text>
              <Pressable>
                <Text style={styles.sectionLink}>View All</Text>
              </Pressable>
            </View>
            {recentScans.map(item => (
              <View
                key={item.title}
                style={[
                  styles.listItem,
                  {backgroundColor: colors.mutedSurface},
                ]}>
                <MaterialIcons
                  name="receipt-long"
                  size={28}
                  color={palette.primary}
                />
                <View style={styles.listTextWrapper}>
                  <Text style={[styles.listTitle, {color: colors.textPrimary}]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.listSubtitle,
                      {color: colors.textSecondary},
                    ]}>
                    {item.summary}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    gap: 24,
  },
  heroCard: {
    borderRadius: 20,
    padding: 24,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 6,
    gap: 16,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  scanButton: {
    backgroundColor: palette.primary,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  scanButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionCard: {
    borderRadius: 20,
    padding: 24,
    gap: 16,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  sectionLink: {
    color: palette.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  listItem: {
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  listTextWrapper: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  listSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  shadowLight: {
    shadowColor: '#91a3a0',
  },
  shadowDark: {
    shadowColor: '#000000',
  },
});

export default HomeScreen;
