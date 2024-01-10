import Portal from '@/lib/utils/Portal';
import { theme } from '@/styles';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface IDrawerProps {
  children: ReactNode;
  location?: 'left' | 'bottom';
  onClose: () => void;
}

function Drawer({ children, location = 'left', onClose }: IDrawerProps) {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <Portal>
      <Background isLeft={location === 'left'} onClick={onClose}>
        <Wrapper isLeft={location === 'left'} onClick={handleWrapperClick}>
          {children}
        </Wrapper>
      </Background>
    </Portal>
  );
}

export default Drawer;

const Background = styled.div<{ isLeft: boolean }>`
  display: flex;
  justify-content: ${({ isLeft }) => (isLeft ? 'flex-start' : 'center')};
  align-items: ${({ isLeft }) => (isLeft ? 'center' : 'flex-end')};

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 11;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div<{ isLeft: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${theme.color.WHITE};
  padding: 2rem;

  ${({ isLeft }) =>
    isLeft
      ? `
    min-height:100%; 
    height:100%;
    width: 65%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    `
      : `
      width:100%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      `}
`;
