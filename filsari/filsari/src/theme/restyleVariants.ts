export const colors = {
  LIGHT_BLUE: '#70d5df', // Light blue accent
  BRIGHT_BLUE: '#30DCED', // Bright blue for highlights and links
  BACKGROUND: '#FFFFFF', // Base background color
  WHITE: '#FFFFFF', // Neutral white
  BLACK: '#1C1C1C', // Text or deep contrast
  LIGHT_BLACK: '#4D4D4D',
  GOLD_YELLOW: '#F2C94C', // Softened gold (Philippine flag yellow)
  FLAG_RED: '#E63946', // Softer red (Philippine flag red)
  FLAG_BLUE: '#0D47A1', // Softened dark blue (Philippine flag blue)
  NEUTRAL_GRAY: '#8D8686', // Neutral gray for balance
  BACKGROUND_SECONDARY: '#F1F1F1', // Subtle gray for secondary backgrounds
};

export const container = {
  defaults: {},
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowSpaceEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
};

export const spacing = {
  XXXS: 2,
  XXS: 4, // Extra-extra small spacing
  XS: 8, // Extra small spacing
  S: 12, // Small spacing
  M: 16, // Medium spacing (standard padding/margin)
  L: 20, // Large spacing
  XL: 24, // Extra-large spacing
  XXL: 32, // Extra-extra large spacing
  XXXL: 40, // Even larger spacing for big sections
  auto: 'auto', // Automatic spacing for dynamic layouts
};

// •	fs10fw400: Very small text, ideal for subtle captions or metadata.
// •	fs12fw400 / fs12fw600: For smaller text elements, such as labels or buttons.
// •	fs14fw400 / fs14fw700: Common for body text or secondary headings.
// •	fs16fw400 / fs16fw600: Used for subheadings, buttons, or content that needs slight emphasis.
// •	fs18fw400 / fs18fw700: Slightly larger for headers or prominent labels.
// •	fs20fw600: Perfect for main headings or callout text.
// •	fs24fw700 / fs32fw700: Great for larger headings or important titles.
export const textVariants = {
  defaults: {
    fontSize: 14,
    fontWeight: '400',
  },
  fs10fw400: {
    fontSize: 10,
    fontWeight: '400',
  },
  fs12fw400: {
    fontSize: 12,
    fontWeight: '400',
  },
  fs12fw600: {
    fontSize: 12,
    fontWeight: '600',
  },
  fs14fw400: {
    fontSize: 14,
    fontWeight: '400',
  },
  fs14fw700: {
    fontSize: 14,
    fontWeight: '700',
  },
  fs16fw400: {
    fontSize: 16,
    fontWeight: '400',
  },
  fs16fw600: {
    fontSize: 16,
    fontWeight: '600',
  },
  fs18fw400: {
    fontSize: 18,
    fontWeight: '400',
  },
  fs18fw700: {
    fontSize: 18,
    fontWeight: '700',
  },
  fs20fw600: {
    fontSize: 20,
    fontWeight: '600',
  },
  fs24fw700: {
    fontSize: 24,
    fontWeight: '700',
  },
  fs32fw600: {
    fontSize: 32,
    fontWeight: '600',
  },
  fs32fw700: {
    fontSize: 32,
    fontWeight: '700',
  },
  fs36fw600: {
    fontSize: 36,
    fontWeight: '600',
  },
  fs40fw700: {
    fontSize: 40,
    fontWeight: '700',
  },
};
