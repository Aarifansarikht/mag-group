
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

interface AppCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  active?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ children, style, active }) => {
  const { colors } = useTheme();

  return (
    <View style={[
      styles.card, 
      { 
        backgroundColor: active ? colors.surface : colors.card,
        borderColor: active ? colors.primary : colors.border,
        borderLeftWidth: 4, // RunRaw style
        borderLeftColor: active ? colors.primary : colors.border,
      }, 
      active && styles.activeShadow,
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  activeShadow: {
    shadowColor: '#bef264',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
