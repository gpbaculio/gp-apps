import {BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetViewProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetView/types';
import {createBox} from '@shopify/restyle';

import {createContainer} from '@utils';

import {Theme} from '@theme';

export const DynamicBottomSheetView = createContainer(
  createBox<Theme, BottomSheetViewProps>(BottomSheetView),
);
