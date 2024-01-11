import React from 'react';
import styled from 'styled-components';
import P from './P';
import { theme } from '@/styles';

interface IHashTagButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isSelected?: boolean;
  color?: string;
}

function HashTagButton({
  label,
  isSelected = true,
  onClick,
  color = theme.color.LEDGER_HASHTAG_COLOR.green,
}: IHashTagButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Name isSelected={isSelected} color={color}>
        #{label}
      </Name>
    </Wrapper>
  );
}

export default HashTagButton;

const Wrapper = styled.button`
  margin: 0.4rem 0.6rem;
  outline: none;
  border: none;
  background-color: transparent;
  width: fit-content;
  padding: 0;
`;

const Name = styled(P).attrs({
  fontWeight: theme.font.fontWeight.semibold,
})<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? props.color : theme.color.GREY[100])};
`;
