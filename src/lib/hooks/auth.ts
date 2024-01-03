import { useSetRecoilState } from 'recoil';
import { loginState } from '../store';

export const useLogin = () => {
  const setIsLoggedIn = useSetRecoilState(loginState);

  const login = (inputPW: string) => {
    if (inputPW === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      setIsLoggedIn({ isLoggedIn: true });
    } else {
      setIsLoggedIn({ isLoggedIn: false });
    }
  };

  return { login };
};
