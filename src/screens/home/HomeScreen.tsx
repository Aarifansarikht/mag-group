
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, StatusBar } from 'react-native';
import { useTheme } from '../../theme';
import { AppButton } from '../../components/ui/AppButton';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export const HomeScreen = () => {
  const { colors, typography, isDark } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ paddingBottom: 100 }}>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        
        {/* Hero Section */}
        <View style={styles.heroContainer}>
            <View style={styles.textContainer}>
                <Text style={[styles.heroTitle, { color: colors.text, fontFamily: typography.fonts.display }]}>
                    RUN FAST.
                </Text>
                <Text style={[styles.heroTitle, { color: colors.textSecondary, fontFamily: typography.fonts.display }]}>
                    EAT CLEAN.
                </Text>
                <Text style={[styles.heroTitle, { color: colors.primary, fontFamily: typography.fonts.display }]}>
                    LIVE RAW.
                </Text>
                <Text style={[styles.heroSubtitle, { color: colors.textSecondary }]}>
                    Join the elite club where endurance meets nutrition. Personalized plans, expert coaching, and community.
                </Text>
                
                <View style={styles.buttonRow}>
                    <AppButton title="Start Training" onPress={() => {}} style={{ width: 160 }} />
                </View>
            </View>

            {/* Featured Image */}
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop' }} 
                    style={styles.heroImage}
                />
                <LinearGradient 
                    colors={['transparent', colors.background]} 
                    style={StyleSheet.absoluteFill} 
                />
                
                {/* Floating Card */}
                <View style={[styles.floatCard, { backgroundColor: isDark ? 'rgba(24, 24, 27, 0.9)' : 'rgba(255,255,255,0.9)', borderColor: colors.border }]}>
                    <Text style={[styles.floatTitle, { color: colors.primary }]}>TODAY'S FOCUS</Text>
                    <View style={styles.bulletItem}>
                        <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                        <Text style={[styles.bulletText, { color: colors.text }]}>Interval Sprints (5k Pace)</Text>
                    </View>
                     <View style={styles.bulletItem}>
                        <View style={[styles.dot, { backgroundColor: colors.primary }]} />
                        <Text style={[styles.bulletText, { color: colors.text }]}>Protein Loading</Text>
                    </View>
                </View>
            </View>
        </View>

        {/* Stats Section */}
        <View style={[styles.statsSection, { borderColor: colors.border }]}>
            <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>500+</Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>MARATHONS</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>50K</Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>MILES RUN</Text>
            </View>
            <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.text, fontFamily: typography.fonts.display }]}>100%</Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>NATURAL</Text>
            </View>
        </View>

        {/* Call To Action */}
        <View style={styles.ctaContainer}>
            <Text style={[styles.sectionHeader, { color: colors.text, fontFamily: typography.fonts.display }]}>
                WHY CHOOSE US
            </Text>
            {/* Simple Feature List */}
            {[
                { icon: 'activity', title: 'Endurance Training', desc: 'Science-backed running programs.' },
                { icon: 'zap', title: 'Strength & Mobility', desc: 'Cross-training to prevent injury.' },
            ].map((item, idx) => (
                <View key={idx} style={[styles.featureCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <View style={[styles.iconBox, { backgroundColor: isDark ? '#27272a' : '#f4f4f5' }]}>
                        <Icon name={item.icon} size={24} color={colors.primary} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.featureTitle, { color: colors.text, fontFamily: typography.fonts.display }]}>{item.title.toUpperCase()}</Text>
                        <Text style={[styles.featureDesc, { color: colors.textSecondary }]}>{item.desc}</Text>
                    </View>
                </View>
            ))}
        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    paddingTop: 60,
  },
  textContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 48,
    fontStyle: 'italic',
    lineHeight: 48,
    fontWeight: '900',
  },
  heroSubtitle: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  floatCard: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    transform: [{ skewX: '-6deg' }],
  },
  floatTitle: {
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  bulletText: {
    fontSize: 12,
    fontWeight: '700',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginTop: -40, // Pull up over image gradient
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 4,
  },
  ctaContainer: {
    padding: 24,
  },
  sectionHeader: {
    fontSize: 32,
    fontStyle: 'italic',
    marginBottom: 24,
  },
  featureCard: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  iconBox: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    transform: [{ skewX: '-10deg' }],
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 12,
  }
});
