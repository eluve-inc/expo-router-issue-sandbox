import { ThemedText } from '@/components/ThemedText';
import { Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function UserScreen() {
  // NOte: https://github.com/expo/expo/issues/27894#issuecomment-2023985789
  // using Slot creates a node in the heirarchy... so we can get its parent to get the actual stack navigator
  const navigation = useNavigation().getParent();

  useEffect(() => {
    navigation?.setOptions({
      headerShown: true,
      headerTitle: () => <ThemedText>Test User</ThemedText>,
    });
  }, [navigation]);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'test',
          headerShown: true,
          headerTitle: () => <ThemedText>Test User</ThemedText>,
        }}
      />
      <View>
        <ThemedText>User</ThemedText>
      </View>
    </>
  );
}
