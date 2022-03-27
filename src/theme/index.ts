import { RFValue } from 'react-native-responsive-fontsize'

export default {
  COLORS: {
    BACKGROUND: '#1D5A93',
    WHITE_BACKGROUND: '#FFFFFF',
    ALERT: '#E11D48',
    WARNING: '#FCD34D',
    DARK_TEXT: '#34393E',
    LIGHT_TEXT: '#FFFFFF',
    GRADIENT: ['rgba(29,90,147,1)', 'rgba(29,90,147,0.01)'],
  },
  FONTS: {
    REGULAR: 'Roboto_400Regular',
    MEDIUM: 'Roboto_500Medium',
    BOLD: 'Roboto_700Bold',
  },
  FONT_SIZES: {
    XS: `${RFValue(10)}px`,
    SM: `${RFValue(14)}px`,
    RG: `${RFValue(16)}px`,
    MD: `${RFValue(20)}px`,
    BG: `${RFValue(26)}px`,
    XL: `${RFValue(48)}px`,
  },
};
