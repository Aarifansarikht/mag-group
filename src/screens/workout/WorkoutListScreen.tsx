
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme';
import { WORKOUT_DATA } from '../../data/workouts';
import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WorkoutListScreen = () => {
  const { colors, typography } = useTheme();

  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={[styles.badge, { backgroundColor: colors.surface }]}>
            <Icon name="zap" size={12} color={colors.primary} />
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.metaRow}>
            <View style={styles.metaItem}>
                <Icon name="clock" size={12} color={colors.textSecondary} />
                <Text style={[styles.metaText, { color: colors.textSecondary }]}>{item.duration}</Text>
            </View>
            <View style={styles.metaItem}>
                <Icon name="bar-chart-2" size={12} color={colors.textSecondary} />
                <Text style={[styles.metaText, { color: colors.textSecondary }]}>{item.level}</Text>
            </View>
        </View>

        <Text style={[styles.title, { color: colors.text, fontFamily: typography.fonts.display }]}>
            {item.title.toUpperCase()}
        </Text>

        <View style={[styles.focusTag, { borderTopColor: colors.border }]}>
            <Icon name="target" size={12} color={colors.primary} style={{ marginRight: 6 }} />
            <Text style={{ color: colors.text, fontSize: 10, fontWeight: '700', textTransform: 'uppercase' }}>
                FOCUS: {item.focus}
            </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text, fontFamily: typography.fonts.display }]}>
            TRAINING PLANS
        </Text>
        <Text style={{ color: colors.textSecondary }}>Choose your challenge.</Text>
      </View>
      
      <FlatList
        data={WORKOUT_DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 24,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 32,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  listContent: {
    padding: 24,
    paddingTop: 12,
  },
  card: {
    borderWidth: 1,
    marginBottom: 24,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 8,
    borderRadius: 4,
  },
  content: {
    padding: 20,
  },
  metaRow: {
    flexDirection: 'row',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3f3f46', // subtle line
    paddingBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '900',
    marginBottom: 16,
  },
  focusTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
  }
});
