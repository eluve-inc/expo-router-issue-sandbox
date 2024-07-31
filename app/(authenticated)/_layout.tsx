import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { SplashScreenSuspense } from '../../components/SplashScreenSuspense';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ThemedText } from '@/components/ThemedText';
import { UserInfoProvider } from '@/components/UserInfoProvider';

const AuthenticatedLayout = () => {
  return (
    <SplashScreenSuspense>
      <UserInfoProvider>
        <Stack
          screenOptions={{
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            name="home"
            options={{
              headerTitle: () => <ThemedText>Home</ThemedText>,
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              headerTitle: () => <ThemedText>Settings</ThemedText>,
            }}
          />
        </Stack>
      </UserInfoProvider>
    </SplashScreenSuspense>
  );
};

export default AuthenticatedLayout;
