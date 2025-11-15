import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {palette} from '../theme/palette';

interface PlaceholderScreenProps {
  title: string;
  subtitle?: string;
}

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({
  title,
  subtitle,
}) => {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark
    ? palette.backgroundDark
    : palette.backgroundLight;
  const primaryText = isDark ? palette.textDark : palette.textLight;
  const secondaryText = isDark ? 'rgba(248,249,250,0.7)' : 'rgba(47,79,79,0.7)';

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      <View style={styles.container}>
        <Text style={[styles.title, {color: primaryText}]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.subtitle, {color: secondaryText}]}>
            {subtitle}
          </Text>
        ) : null}
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PlaceholderScreen;
