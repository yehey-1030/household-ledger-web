import React from 'react';
import styled from 'styled-components';
import P from './P';
import { theme } from '@/styles';

interface IHashTagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isSelected?: boolean;
}

function HashTag({ label, isSelected = true, onClick }: IHashTagProps) {
  return (
    <Wrapper onClick={onClick}>
      <Name isSelected={isSelected}>#{label}</Name>
    </Wrapper>
  );
}

export default HashTag;

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
  color: ${(props) => (props.isSelected ? theme.color.MAJOR_GREEN[200] : theme.color.GREY[100])};
`;
