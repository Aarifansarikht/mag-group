
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, ActivityIndicator, View } from 'react-native';
import { useTheme } from '../../theme';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  style?: ViewStyle;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const AppButton: React.FC<AppButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  style, 
  loading,
  icon
}) => {
  const { colors, typography } = useTheme();

  const getBackgroundColor = () => {
    if (variant === 'primary') return colors.primary;
    if (variant === 'ghost') return 'transparent';
    return 'transparent';
  };

  const getTextColor = () => {
    if (variant === 'primary') return colors.primaryForeground;
    if (variant === 'outline') return colors.text;
    return colors.text;
  };

  const getBorder = () => {
    if (variant === 'outline') return { borderWidth: 2, borderColor: colors.border };
    return {};
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={loading}
      style={[
        styles.container,
        { 
          backgroundColor: getBackgroundColor(),
          ...getBorder(),
        },
        style,
      ]}
    >
      <View style={styles.skewContainer}>
        {loading ? (
            <ActivityIndicator color={getTextColor()} />
        ) : (
            <View style={styles.contentContainer}>
                {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
                <Text style={[
                    styles.text, 
                    { 
                        color: getTextColor(),
                        fontFamily: typography.fonts.display, // Using Display font for buttons
                    }
                ]}>
                    {title.toUpperCase()}
                </Text>
            </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ skewX: '-10deg' }],
    paddingHorizontal: 20,
    // Sharp corners implicitly handled by default View
  },
  skewContainer: {
    transform: [{ skewX: '10deg' }], // Counter-skew text
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
