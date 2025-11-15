import React from 'react';
import {
  ColorSchemeName,
  Platform,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import {palette} from '../theme/palette';

enableScreens();

const PrescriptionsScreen = () => (
  <PlaceholderScreen
    title="Prescriptions"
    subtitle="Track and review all processed prescriptions here."
  />
);

const RemindersScreen = () => (
  <PlaceholderScreen
    title="Reminders"
    subtitle="Medication reminders and schedules will appear here."
  />
);

const SettingsScreen = () => (
  <PlaceholderScreen
    title="Settings"
    subtitle="Manage profile, notifications, and accessibility options."
  />
);

type TabParamList = {
  Home: undefined;
  Prescriptions: undefined;
  Reminders: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const tabIcons: Record<keyof TabParamList, string> = {
  Home: 'home',
  Prescriptions: 'receipt-long',
  Reminders: 'notifications',
  Settings: 'settings',
};

const renderTabBarIcon = (
  routeName: keyof TabParamList,
  color: string,
  size: number,
  focused: boolean,
) => (
  <MaterialIcons
    name={tabIcons[routeName]}
    size={size ?? 24}
    color={focused ? palette.primary : color}
  />
);

const buildTheme = (scheme: ColorSchemeName) => {
  const isDark = scheme === 'dark';
  if (isDark) {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: palette.primary,
        background: palette.backgroundDark,
        card: '#1b2b22',
        text: palette.textDark,
        border: 'rgba(255,255,255,0.12)',
      },
    };
  }

  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: palette.primary,
      background: palette.backgroundLight,
      card: '#ffffff',
      text: palette.textLight,
      border: 'rgba(0,0,0,0.08)',
    },
  };
};

const AppNavigator = (): React.JSX.Element => {
  const colorScheme = useColorScheme();
  const navTheme = React.useMemo(() => buildTheme(colorScheme), [colorScheme]);
  const isDark = colorScheme === 'dark';

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarIcon: ({color, size, focused}) =>
            renderTabBarIcon(
              route.name as keyof TabParamList,
              color ?? palette.textLight,
              size ?? 24,
              Boolean(focused),
            ),
          tabBarActiveTintColor: palette.primary,
          tabBarInactiveTintColor: isDark
            ? 'rgba(248,249,250,0.7)'
            : 'rgba(47,79,79,0.6)',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginBottom: Platform.OS === 'android' ? 2 : 0,
          },
          tabBarStyle: {
            backgroundColor: isDark
              ? '#1b2b22ee'
              : `${palette.backgroundLight}ee`,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: isDark
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(47,79,79,0.15)',
            height: 64,
            paddingVertical: 8,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen name="Prescriptions" component={PrescriptionsScreen} />
        <Tab.Screen name="Reminders" component={RemindersScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
