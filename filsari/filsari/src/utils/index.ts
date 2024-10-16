import {createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const createContainer = <T>(Component: React.ComponentType<T>) => {
  return createRestyleComponent<VariantProps<Theme, 'container'> & T, Theme>(
    [createVariant({themeKey: 'container'})],
    Component,
  );
};

export const jsonAsyncStorage = createJSONStorage(() => AsyncStorage);
