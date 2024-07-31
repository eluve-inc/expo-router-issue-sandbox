import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <ThemedText>Home Screen</ThemedText>
      <Link href="/settings" asChild>
        <Button title="Go to Settings" />
      </Link>
      <Link href="/test/1" asChild>
        <Button title="Go to Test user 1" />
      </Link>
    </View>
  );
}
