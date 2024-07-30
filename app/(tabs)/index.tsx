import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { Tabs } from 'expo-router';
import React, { Suspense, useState, useEffect, ReactElement } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SplashScreenSuspense } from '@/components/SplashScreenSuspense';

import { Text, View, ActivityIndicator } from 'react-native';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';



// Simulate a network request with a promise
const fetchData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, this is data from a simulated network request!");
    }, 2000); // 2-second delay
  });
};

const DataComponent: React.FC = () => {
  // Use the useSuspenseQuery hook to fetch data with Suspense
  const { data } = useSuspenseQuery({queryKey: ['data'], queryFn: fetchData});

  return <ThemedText>{data}</ThemedText>;
};

export default function HomeScreen() {
  return (
    <SplashScreenSuspense>

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        <DataComponent />
        </ParallaxScrollView>
    </SplashScreenSuspense>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
