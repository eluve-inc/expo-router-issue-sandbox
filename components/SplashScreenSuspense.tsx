import { PropsWithChildren, Suspense, useEffect } from 'react';

import { useSetSplashScreenLoader } from './SplashScreenProvider';

const SuspensePlaceholder: React.FC = () => {
  const setLoading = useSetSplashScreenLoader();

  useEffect(() => {
    // on mount means when suspense is triggered
    setLoading(true);

    return () => {
      // on unmount means when suspense is resolved
      setLoading(false);
    };
  }, [setLoading]);

  return null;
};

export const SplashScreenSuspense: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <Suspense fallback={<SuspensePlaceholder />}>{children}</Suspense>;
};
