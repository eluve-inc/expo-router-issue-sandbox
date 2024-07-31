import { PropsWithChildren, createContext, useCallback, useContext } from 'react';
import { Text } from 'react-native';
import Animated, {
  SlideOutUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const SetSplashScreenLoader = createContext<((loading: boolean) => void) | null>(null);

export const useSetSplashScreenLoader = () => {
  const setSplashScreenLoading = useContext(SetSplashScreenLoader);

  if (!setSplashScreenLoading) {
    throw new Error('useSetSplashScreenLoading must be used within a SplashScreenProvider');
  }

  return setSplashScreenLoading;
};

export const SplashScreenProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const loaderHeight = useSharedValue(0);

  const loaderStyles = useAnimatedStyle(() => ({
    height: `${loaderHeight.value}%`,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  }));

  const handleSetLoading = useCallback(
    (loading: boolean) => {
      if (loading) {
        loaderHeight.value = 100;
      } else {
        loaderHeight.value = withTiming(0, { duration: 600 });
      }
    },
    [loaderHeight],
  );

  return (
    <>
      <Animated.View style={loaderStyles} exiting={SlideOutUp.duration(600)}>
        <Text>Test Splash Screen</Text>
      </Animated.View>
      <SetSplashScreenLoader.Provider value={handleSetLoading}>
        {children}
      </SetSplashScreenLoader.Provider>
    </>
  );
};
