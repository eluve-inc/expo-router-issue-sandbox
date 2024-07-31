import { Slot, Stack } from 'expo-router';
import React from 'react';

import { SplashScreenSuspense } from '../../../../components/SplashScreenSuspense';
import { useSuspenseQuery } from '@tanstack/react-query';

const fetchUserData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, this is data from a simulated network request!');
    }, 2000);
  });
};

export const MoreUserInfoProvider: React.FC<{ children: any }> = ({ children }) => {
  useSuspenseQuery({ queryKey: ['more-user'], queryFn: fetchUserData });
  console.log('UserInfoProvider - got more user data');
  return <>{children}</>;
};

export default function TestLayout() {
  return (
    // <SplashScreenSuspense>
    <MoreUserInfoProvider>
      <Slot />
    </MoreUserInfoProvider>
    // </SplashScreenSuspense>
  );
}
