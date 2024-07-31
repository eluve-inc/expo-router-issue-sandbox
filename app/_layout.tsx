import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SplashScreenProvider } from '@/components/SplashScreenProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SplashScreenSuspense } from '@/components/SplashScreenSuspense';

export { ErrorBoundary } from 'expo-router';

// Initialize a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <SplashScreenProvider>
          <SplashScreenSuspense>
            <Slot />
          </SplashScreenSuspense>
        </SplashScreenProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
