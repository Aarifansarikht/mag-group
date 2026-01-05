
import React from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, SafeAreaView } from 'react-native';
import { useTheme } from '../../theme';
import { AppButton } from '../../components/ui/AppButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export const LoginScreen = () => {
  const { colors, typography, isDark } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
            <View style={[styles.logoIcon, { backgroundColor: colors.primary }]}>
                <Icon name="activity" size={24} color={colors.primaryForeground} />
            </View>
            <Text style={[styles.title, { color: colors.text, fontFamily: typography.fonts.display }]}>
                WELCOME BACK
            </Text>
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                Enter your details to access your training plan.
            </Text>
        </View>

        {/* Form Section */}
        <View style={styles.form}>
            <Text style={[styles.label, { color: colors.text }]}>EMAIL</Text>
            <TextInput 
                style={[styles.input, { backgroundColor: isDark ? '#18181b' : '#f4f4f5', color: colors.text, borderColor: colors.border }]}
                placeholder="runner@example.com"
                placeholderTextColor={colors.textSecondary}
            />

            <View style={styles.row}>
                <Text style={[styles.label, { color: colors.text }]}>PASSWORD</Text>
                <Text style={{ color: colors.textSecondary, fontSize: 12 }}>Forgot password?</Text>
            </View>
            <TextInput 
                style={[styles.input, { backgroundColor: isDark ? '#18181b' : '#f4f4f5', color: colors.text, borderColor: colors.border }]}
                placeholder="••••••••"
                placeholderTextColor={colors.textSecondary}
                secureTextEntry
            />

            <View style={{ height: 20 }} />

            <AppButton 
                title="Sign In" 
                onPress={() => navigation.replace('MainTab')} 
            />
            
            <View style={{ height: 16 }} />

            <AppButton 
                title="Sign in with Google" 
                variant="outline"
                onPress={() => {}} 
            />
        </View>

        <Text style={[styles.footerText, { color: colors.textSecondary }]}>
            New to the pack? <Text style={{ color: colors.text, fontWeight: 'bold' }}>Join Now</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 40,
  },
  logoIcon: {
    width: 48,
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    transform: [{ skewX: '-10deg' }],
  },
  title: {
    fontSize: 32,
    marginBottom: 8,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 1,
  },
  input: {
    height: 48,
    borderBottomWidth: 2,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 32,
  }
});
