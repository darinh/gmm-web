import { getScreenSelector, ScreenWidthMaxLarge, ScreenWidthMinXLarge } from '@fluentui/react';

/** @media only screen and (min-width: 1024px) */
export const DesktopScreenSelector = getScreenSelector(ScreenWidthMinXLarge, undefined);
/** @media only screen and (max-width: 1023px) */
export const MobileScreenSelector = getScreenSelector(undefined, ScreenWidthMaxLarge)
