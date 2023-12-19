import React from 'react';
import styled from 'styled-components';
import P from './P';
import IconButton from './IconButton';
import { theme } from '@/styles';
import CustomLink from './CustomLink';

interface IHeaderProps {
  title: string;
  goback?: boolean;
  canCreate?: boolean;
}

export default function Header({ title, goback = true, canCreate = false }: IHeaderProps) {
  return (
    <Wrapper>
      {goback ? (
        <CustomLink href="/">
          <IconButton iconName="arrow_back_ios" size="2.4rem" />
        </CustomLink>
      ) : (
        <CustomLink href="/statistics">
          <IconButton iconName="bar_chart" size="2.4rem" />
        </CustomLink>
      )}
      <Title>{title}</Title>

      {canCreate ? (
        <CustomLink href="/ledger">
          <IconButton iconName="add" size="2.4rem" />
        </CustomLink>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.color.WHITE};
  position: sticky;
  top: 0;
  padding: 0 1.5rem;
  /* box-shadow: 0px 1px 4px 0px ${theme.color.GREY[300]}; */
  /* margin-bottom: 1rem; */
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[24],
  fontWeight: theme.font.fontWeight.bold,
  color: theme.color.MAJOR_GREEN[100],
})``;

const Empty = styled.div`
  min-width: 3.6rem;
  min-height: 6rem;
`;
