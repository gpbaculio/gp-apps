import {BottomSheetView} from '@gorhom/bottom-sheet';

import {BottomSheetViewProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types';
import {createBox} from '@shopify/restyle';

import {AppContainer} from './AppContainer';
import {SkeletonLoader} from './SkeletonLoader';
import {Theme} from '@theme';
import {createContainer} from '@utils';

export const DynamicBottomSheetView = createContainer(
  createBox<Theme, BottomSheetViewProps>(BottomSheetView),
);

export * from './DynamicRN';
export * from './DynamicAnimated';
export * from './VectorIcons';
export {AppContainer, SkeletonLoader};
