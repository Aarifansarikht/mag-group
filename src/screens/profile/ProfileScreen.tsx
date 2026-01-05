
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme';
import { USER_DATA } from '../../data/user';
import { AppCard } from '../../components/ui/AppCard';
import { AppButton } from '../../components/ui/AppButton';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const { colors, typography } = useTheme();
  const user = USER_DATA;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Profile Header Background */}
      <View style={[styles.headerBg, { backgroundColor: colors.surface }]}>
        <SafeAreaView>
            <View style={styles.profileHeader}>
                <View style={[styles.avatarContainer, { borderColor: colors.border }]}>
                    <Image source={{ uri: user.avatar }} style={styles.avatar} />
                    <View style={[styles.badge, { backgroundColor: colors.primary, borderColor: colors.background }]}>
                        <Text style={styles.badgeText}>PRO</Text>
                    </View>
                </View>
                
                <View style={styles.infoContainer}>
                    <Text style={[styles.name, { color: colors.text, fontFamily: typography.fonts.display }]}>{user.name.toUpperCase()}</Text>
                    <View style={styles.memberRow}>
                        <Icon name="user" size={14} color={colors.textSecondary} />
                        <Text style={[styles.memberText, { color: colors.textSecondary }]}>Member since {user.memberSince}</Text>
                    </View>
                </View>
                
                <TouchableOpacity>
                    <Icon name="settings" size={24} color={colors.textSecondary} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
      </View>

      {/* Stats Grid */}
      <View style={styles.statsContainer}>
        <View style={styles.grid}>
            <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.statLabelRow}>
                    <Icon name="trending-up" size={14} color={colors.primary} />
                    <Text style={styles.statLabel}>BMI</Text>
                </View>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>{user.stats.bmi}</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.statLabelRow}>
                    <Icon name="activity" size={14} color={colors.primary} />
                    <Text style={styles.statLabel}>BMR</Text>
                </View>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>{user.stats.bmr}</Text>
                <Text style={{ fontSize: 10, color: colors.textSecondary }}>kcal/day</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.statLabelRow}>
                    <Icon name="zap" size={14} color={colors.primary} />
                    <Text style={styles.statLabel}>STREAK</Text>
                </View>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>{user.stats.streak}</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.statLabelRow}>
                    <Icon name="award" size={14} color={colors.primary} />
                    <Text style={styles.statLabel}>LEVEL</Text>
                </View>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display, fontSize: 20 }]}>{user.stats.level.toUpperCase()}</Text>
            </View>
        </View>

        {/* Daily Macros Card */}
        <AppCard active>
            <View style={styles.cardHeader}>
                <Text style={[styles.cardTitle, { color: colors.text, fontFamily: typography.fonts.display }]}>DAILY MACRO TARGETS</Text>
                <Icon name="pie-chart" size={20} color={colors.textSecondary} />
            </View>
            
            {/* Progress Bars (Static for now) */}
            <View style={styles.macroRow}>
                <View style={styles.macroHeader}>
                    <Text style={{ color: colors.textSecondary, fontWeight: '700' }}>Protein (180g)</Text>
                    <Text style={{ color: colors.textSecondary }}>120g / 180g</Text>
                </View>
                <View style={[styles.progressBarBg, { backgroundColor: colors.border }]}>
                    <View style={[styles.progressBarFill, { backgroundColor: colors.primary, width: '66%' }]} />
                </View>
            </View>

            <View style={styles.macroRow}>
                <View style={styles.macroHeader}>
                    <Text style={{ color: colors.textSecondary, fontWeight: '700' }}>Carbs (250g)</Text>
                    <Text style={{ color: colors.textSecondary }}>80g / 250g</Text>
                </View>
                <View style={[styles.progressBarBg, { backgroundColor: colors.border }]}>
                    <View style={[styles.progressBarFill, { backgroundColor: '#3b82f6', width: '30%' }]} />
                </View>
            </View>

             <View style={[styles.nextMeal, { backgroundColor: colors.background, borderColor: colors.border }]}>
                <View style={[styles.mealIcon, { backgroundColor: 'rgba(74, 222, 128, 0.2)' }]}>
                    <Icon name="coffee" size={16} color="#15803d" />
                </View>
                <View>
                    <Text style={[styles.mealTitle, { color: colors.text }]}>NEXT MEAL: POST-WORKOUT</Text>
                    <Text style={{ color: colors.textSecondary, fontSize: 12 }}>Chicken Breast (150g) + Sweet Potato</Text>
                </View>
             </View>
        </AppCard>

        {/* Upgrade Banner */}
        <View style={[styles.upgradeBanner, { backgroundColor: colors.primary }]}>
            <Text style={[styles.upgradeTitle, { color: colors.primaryForeground, fontFamily: typography.fonts.display }]}>UPGRADE TO ELITE</Text>
            <Text style={[styles.upgradeText, { color: 'rgba(26, 46, 5, 0.8)' }]}>Get 1-on-1 coaching and analytics.</Text>
            <AppButton 
                title="Upgrade" 
                variant="outline" 
                style={{ marginTop: 16, backgroundColor: colors.primaryForeground, borderWidth: 0 }}
                onPress={() => {}}
            />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBg: {
    paddingBottom: 24,
    paddingTop: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    position: 'relative',
    marginRight: 20,
    borderWidth: 2,
    borderRadius: 2,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    transform: [{ skewX: '-10deg' }],
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#09090b',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginBottom: 4,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberText: {
    fontSize: 12,
    marginLeft: 6,
  },
  statsContainer: {
    padding: 24,
    marginTop: -20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    width: '48%',
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
  },
  statLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#71717a',
    marginLeft: 6,
  },
  statValue: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  macroRow: {
    marginBottom: 16,
  },
  macroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressBarBg: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
  },
  nextMeal: {
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mealTitle: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  upgradeBanner: {
    padding: 24,
    marginTop: 24,
    borderRadius: 2,
  },
  upgradeTitle: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    marginBottom: 4,
  },
  upgradeText: {
    fontSize: 14,
    fontWeight: '700',
  }
});
