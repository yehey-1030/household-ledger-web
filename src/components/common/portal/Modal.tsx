import { theme } from '@/styles';
import styled from 'styled-components';
import P from '../P';
import BottomButton from '../BottomButton';
import Portal from '@/lib/utils/Portal';

interface IModalProps {
  onClose: () => void;
  onComplete?: () => void;
  children?: React.ReactNode;
  title: string;
  buttonLabel: string;
}

function Modal({ onClose, onComplete, children, title, buttonLabel }: IModalProps) {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <Overlay onClick={onClose}>
        <ModalWrapper onClick={handleWrapperClick}>
          <Title>{title}</Title>
          {children}
          <BottomButton btnSize="Medium" onClick={onComplete}>
            {buttonLabel}
          </BottomButton>
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
}

export default Modal;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
  background-color: ${theme.color.WHITE};

  width: calc(100% - 9rem);
  padding: 2rem 2rem 1.5rem;
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[20],
  fontWeight: theme.font.fontWeight.semibold,
})`
  margin-bottom: 1rem;
`;
