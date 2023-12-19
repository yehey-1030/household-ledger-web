import { theme } from '@/styles';
import React from 'react';
import styled from 'styled-components';

export type ButtonType = 'primary' | 'line';
export type ButtonSize = 'Large' | 'Medium';

interface IBottomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: ButtonType;
  btnSize?: ButtonSize;
}
function BottomButton({ btnType = 'primary', children, onClick, disabled, btnSize = 'Large' }: IBottomButtonProps) {
  return (
    <Wrapper btnType={btnType} onClick={onClick} disabled={disabled} btnSize={btnSize}>
      {children}
    </Wrapper>
  );
}

export default BottomButton;

const Wrapper = styled.button<Pick<IBottomButtonProps, 'btnType' | 'disabled' | 'btnSize'>>`
  width: 100%;
  height: fit-content;
  padding: ${(props) => (props.btnSize === 'Large' ? '1.6rem 3rem' : '0.8rem 3rem')};

  font-size: ${(props) => (props.btnSize === 'Large' ? theme.font.fontSize[20] : theme.font.fontSize[16])};
  font-weight: ${theme.font.fontWeight.semibold};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  box-shadow: 0px 3px 4px 0px ${theme.color.GREY[300]};
  outline: none;
  border: none;
  transition: all 0.2s;

  background-color: ${(props) => (props.btnType === 'primary' ? theme.color.MAJOR_GREEN[100] : theme.color.WHITE)};
  color: ${(props) => (props.btnType === 'primary' ? theme.color.WHITE : theme.color.MAJOR_GREEN[100])};
`;
