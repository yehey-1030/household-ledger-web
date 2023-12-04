import React from 'react';
import styled from 'styled-components';
import P from './P';
import { theme } from '@/styles';

interface IHeaderProps {
  title: string;
  goback?: boolean;
}

export default function Header({ title, goback = true }: IHeaderProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.WHITE};
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[24],
  fontWeight: theme.font.fontWeight.bold,
  color: theme.color.MAJOR_GREEN[100],
})``;
