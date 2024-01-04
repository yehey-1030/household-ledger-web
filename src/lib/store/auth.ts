import { LoginStateType } from '@/types/auth';
import { atom, selector } from 'recoil';

export const defaultLoginState: LoginStateType = {
  isLoggedIn: false,
};

export const loginState = atom<LoginStateType>({
  key: 'loginState',
  default: defaultLoginState,
});

export const loginStateSelector = selector({
  key: 'isLoggedInSelector',
  get: ({ get }) => {
    return get(loginState).isLoggedIn;
  },
});
