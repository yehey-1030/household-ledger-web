import { theme } from '@/styles';
import React from 'react';
import styled from 'styled-components';

export type ButtonType = 'primary' | 'line';

interface IBottomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: ButtonType;
}
function BottomButton({ btnType = 'primary', children, onClick, disabled }: IBottomButtonProps) {
  return (
    <Wrapper btnType={btnType} onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  );
}

export default BottomButton;

const Wrapper = styled.button<Pick<IBottomButtonProps, 'btnType' | 'disabled'>>`
  width: 100%;
  height: 5.7rem;
  padding: 1.6rem 3rem;
  font-size: ${theme.font.fontSize[20]};
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
