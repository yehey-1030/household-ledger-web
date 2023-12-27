type ColorType = {
  [index: string]: string;
};
const ColorKeyType: ColorType = {
  2: 'yellow',
  3: 'green',
  4: 'purple',
  5: 'pink',
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
  yellow: '#F3F1CC',
  green: MAJOR_GREEN[300],
  purple: '#DDD9E6',
  pink: '#F5E1E1',
};

export const LEDGER_HASHTAG_COLOR: ColorType = {
  yellow: '#D6CF14',
  green: MAJOR_GREEN[200],
  purple: '#A496C3',
  pink: '#CA9F9F',
};

export const getValidKey = (key: string) => {
  if (!Object.keys(ColorKeyType).includes(key)) {
    return 'green';
  }
  return ColorKeyType[key];
};

const color = {
  WHITE,
  BLACK,
  GREY,
  MAJOR_GREEN,
  LEDGER_BACKGROUND,
  LEDGER_HASHTAG_COLOR,
};

export default color;
