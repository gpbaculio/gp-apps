import React from 'react';

import {
  AppContainer,
  DynamicFeather,
  DynamicText,
  DynamicView,
} from '@components';

export default function App() {
  return (
    <AppContainer>
      <DynamicView flex={1} variant="centerItems">
        <DynamicText color="BRIGHT_BLUE">App</DynamicText>
        <DynamicFeather name="feather" size={24} color="black" />
      </DynamicView>
    </AppContainer>
  );
}
