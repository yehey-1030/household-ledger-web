import React from 'react';
import styled from 'styled-components';
import P from './P';
import IconButton from './IconButton';
import { theme } from '@/styles';
import CustomLink from './CustomLink';
import { useRouter } from 'next/navigation';

interface IHeaderProps {
  title: string;
  goback?: boolean;
  canCreate?: boolean;
  isColored?: boolean;
  hasShadow?: boolean;
}

export default function Header({
  title,
  goback = true,
  canCreate = false,
  isColored = false,
  hasShadow = false,
}: IHeaderProps) {
  const router = useRouter();
  return (
    <Wrapper isColored={isColored} hasShadow={hasShadow}>
      {goback ? (
        <IconButton
          onClick={() => router.back()}
          iconName="arrow_back_ios"
          size="2.4rem"
          color={isColored ? theme.color.MAJOR_GREEN[200] : theme.color.MAJOR_GREEN[100]}
        />
      ) : (
        <CustomLink href="/statistics">
          <IconButton
            iconName="bar_chart"
            size="2.4rem"
            color={isColored ? theme.color.MAJOR_GREEN[200] : theme.color.MAJOR_GREEN[100]}
          />
        </CustomLink>
      )}
      <Title isColored={isColored}>{title}</Title>

      {canCreate ? (
        <CustomLink href="/ledger">
          <IconButton
            iconName="add"
            size="2.4rem"
            color={isColored ? theme.color.MAJOR_GREEN[200] : theme.color.MAJOR_GREEN[100]}
          />
        </CustomLink>
      ) : (
        <Empty />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header<{ isColored: boolean; hasShadow: boolean }>`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isColored ? theme.color.MAJOR_GREEN[300] : theme.color.WHITE)};
  position: sticky;
  top: 0;
  padding: 0 1.5rem;

  box-shadow: ${(props) => (props.hasShadow ? `0px 1px 4px 0px ${theme.color.GREY[300]}` : 'none')};

  z-index: 7;
  /* margin-bottom: 1rem; */
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[24],
  fontWeight: theme.font.fontWeight.bold,
})<{ isColored: boolean }>`
  color: ${(props) => (props.isColored ? theme.color.MAJOR_GREEN[200] : theme.color.MAJOR_GREEN[100])};
`;

const Empty = styled.div`
  min-width: 2.4rem;
  min-height: 6rem;
`;
