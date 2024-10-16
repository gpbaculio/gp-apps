import React from 'react';

import {
  AppContainer,
  DynamicFontAwesome5,
  DynamicFontAwesome6,
  DynamicText,
  DynamicView,
} from '@components';

import {colors} from './theme/restyleVariants';
import {shadowStyle} from './constants';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
export default function App() {
  return (
    <AppContainer>
      <DynamicView
        flex={1}
        variant="centerItems"
        backgroundColor="BACKGROUND_SECONDARY">
        <DynamicView variant="centerItems" mb="XL">
          <DynamicView variant="rowCenterBetween">
            <DynamicText letterSpacing={1.5} color="BLACK" variant="fs36fw600">
              Welcome
            </DynamicText>
            <DynamicText
              letterSpacing={1.5}
              ml="M"
              color="BLACK"
              variant="fs36fw600">
              to
            </DynamicText>
          </DynamicView>
          <DynamicView variant="rowAlignCenter">
            <DynamicText
              letterSpacing={3}
              my="S"
              color="FLAG_BLUE"
              variant="fs40fw700">
              Fil
            </DynamicText>
            <DynamicText
              letterSpacing={3}
              my="S"
              color="FLAG_RED"
              variant="fs40fw700"
              mr="S">
              Sari
            </DynamicText>
            <DynamicView variant="rowAlignCenter" justifyContent="center">
              <DynamicView
                width={30}
                height={50}
                backgroundColor="FLAG_BLUE"
                borderTopLeftRadius={12}
                borderBottomLeftRadius={12}
              />
              <DynamicView
                width={30}
                height={50}
                backgroundColor="FLAG_RED"
                borderTopRightRadius={12}
                borderBottomRightRadius={12}
              />
              <DynamicFontAwesome5
                name="store-alt"
                size={24}
                color={colors.GOLD_YELLOW}
                position="absolute"
                alignSelf="center"
              />
            </DynamicView>
          </DynamicView>
          <DynamicText color="LIGHT_BLACK" variant="fs14fw400">
            Connecting communities through local shopping
          </DynamicText>
        </DynamicView>
        <DynamicView variant="centerItems">
          <DynamicText
            letterSpacing={2}
            mt="XXXL"
            mb="L"
            color="BLACK"
            variant="fs24fw700">
            GET STARTED
          </DynamicText>
          <DynamicView
            backgroundColor="WHITE"
            style={shadowStyle.shadow}
            width={width * 0.85}
            py="M"
            variant="centerItems">
            <DynamicFontAwesome6
              mb="XXS"
              name="person"
              size={24}
              color="black"
            />
            <DynamicText my="XXS" letterSpacing={2} color="BLACK">
              Proceed as Customer
            </DynamicText>
            <DynamicText>
              Make your sari-sari store experience better
            </DynamicText>
          </DynamicView>
          <DynamicView
            my="L"
            width={width * 0.85}
            variant="rowAlignCenter"
            justifyContent="space-between">
            <DynamicView
              width={width * 0.38}
              opacity={0.5}
              backgroundColor="BLACK"
              height={1}
            />
            <DynamicText letterSpacing={2}>OR</DynamicText>
            <DynamicView
              width={width * 0.38}
              backgroundColor="BLACK"
              opacity={0.5}
              height={1}
            />
          </DynamicView>
          <DynamicView
            backgroundColor="WHITE"
            style={shadowStyle.shadow}
            width={width * 0.85}
            py="M"
            variant="centerItems">
            <DynamicFontAwesome5
              mb="XXS"
              name="store-alt"
              size={24}
              color="black"
            />
            <DynamicText my="XXS" letterSpacing={2} color="BLACK">
              Proceed as Store Owner
            </DynamicText>
            <DynamicText>
              Connect with customers & grow your business
            </DynamicText>
          </DynamicView>
        </DynamicView>
      </DynamicView>
    </AppContainer>
  );
}
