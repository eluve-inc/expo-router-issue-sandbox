import React from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

// Simulate a network request with a promise
const fetchUserData = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, this is data from a simulated network request!');
    }, 2000); // 2-second delay
  });
};

export const UserInfoProvider: React.FC<{ children: any }> = ({ children }) => {
  // Use the useSuspenseQuery hook to fetch data with Suspense
  useSuspenseQuery({ queryKey: ['user'], queryFn: fetchUserData });
  console.log('UserInfoProvider - got user data');
  return <>{children}</>;
};
