import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider} from '@shopify/restyle';
import {Provider as JotaiProvider} from 'jotai';
import {NavigationContainer} from '@react-navigation/native';

import theme from '@theme';

export type ContainerProps = {
  children: ReactNode;
};

export function AppContainer({children}: ContainerProps) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <JotaiProvider>{children}</JotaiProvider>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
