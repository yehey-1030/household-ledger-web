import Portal from '@/lib/utils/Portal';
import { theme } from '@/styles';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IDrawerProps {
  children: ReactNode;
  location?: 'left' | 'bottom' | 'right';
  onClose: () => void;
}

function Drawer({ children, location = 'right', onClose }: IDrawerProps) {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <Portal>
      <Background isRight={location === 'right'} onClick={onClose}>
        <Wrapper isRight={location === 'right'} onClick={handleWrapperClick}>
          {children}
        </Wrapper>
      </Background>
    </Portal>
  );
}

export default Drawer;

const Background = styled.div<{ isRight: boolean }>`
  display: flex;
  justify-content: ${({ isRight }) => (isRight ? 'flex-end' : 'center')};
  align-items: ${({ isRight }) => (isRight ? 'center' : 'flex-end')};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div<{ isRight: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${theme.color.WHITE};
  padding: 2rem;

  ${({ isRight }) =>
    isRight
      ? `
    min-height:100%; 
    height:100%;
    width: 65%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    `
      : `
      width:100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      `}
`;
