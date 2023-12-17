import { DefaultTheme } from 'styled-components';
import color from './color';
import font from './font';

export type ColorsType = typeof color;
export type FontType = typeof font;

export const theme: DefaultTheme = {
  font,
  color,
};
