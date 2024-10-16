import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBox} from '@shopify/restyle';

import {createContainer} from '@utils';

import {Theme} from '@theme';

type FeatherIconProps = React.ComponentProps<typeof Feather>;
export const DynamicFeather = createContainer(
  createBox<Theme, FeatherIconProps>(Feather),
);

type AntDesignIconProps = React.ComponentProps<typeof AntDesign>;
export const DynamicAntDesign = createContainer(
  createBox<Theme, AntDesignIconProps>(AntDesign),
);

type EntypoIconProps = React.ComponentProps<typeof Entypo>;
export const DynamicEntypo = createContainer(
  createBox<Theme, EntypoIconProps>(Entypo),
);

type FontAwesomeProps = React.ComponentProps<typeof FontAwesome>;
export const DynamicFontAwesome = createContainer(
  createBox<Theme, FontAwesomeProps>(FontAwesome),
);

type FontAwesome6Props = React.ComponentProps<typeof FontAwesome6>;
export const DynamicFontAwesome6 = createContainer(
  createBox<Theme, FontAwesome6Props>(FontAwesome6),
);

type IoniconsProps = React.ComponentProps<typeof Ionicons>;
export const DynamicIonicons = createContainer(
  createBox<Theme, IoniconsProps>(Ionicons),
);

type MaterialCommunityIconsProps = React.ComponentProps<
  typeof MaterialCommunityIcons
>;
export const DynamicMaterialCommunityIcons = createContainer(
  createBox<Theme, MaterialCommunityIconsProps>(MaterialCommunityIcons),
);

type MaterialIconsProps = React.ComponentProps<typeof MaterialIcons>;
export const DynamicMaterialIcons = createContainer(
  createBox<Theme, MaterialIconsProps>(MaterialIcons),
);
