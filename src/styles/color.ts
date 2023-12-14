type ColorType = {
  [index: string]: string;
};

export const WHITE = '#FFFFFF';
export const BLACK = '#000000';
export const GREY: ColorType = {
  100: '#B3B3B3',
  200: '#4E4E4E',
  300: '#D9D9D9',
};
export const MAJOR_GREEN: ColorType = {
  100: '#8ACCB8',
  200: '#68AF9A',
  300: '#E8F5F1',
};
export const LEDGER_BACKGROUND: ColorType = {
  2: '#F3F1CC',
  3: MAJOR_GREEN[300],
  4: '#DDD9E6',
  5: '#F5E1E1',
};

const color = {
  WHITE,
  BLACK,
  GREY,
  MAJOR_GREEN,
  LEDGER_BACKGROUND,
};

export default color;
