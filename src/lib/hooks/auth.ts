import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState, loginStateSelector } from '../store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useLogin = () => {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const router = useRouter();

  const login = (inputPW: string) => {
    if (inputPW === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
      setIsLoggedIn({ isLoggedIn: true });
      router.push('/');
    } else {
      setIsLoggedIn({ isLoggedIn: false });
    }
  };

  return { login };
};

export const useIsLoggedIn = () => {
  const isLoggedIn = useRecoilValue(loginStateSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/login');
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      openModal();
    }
  }, []);

  return { isLoggedIn, closeModal, isModalOpen };
};
