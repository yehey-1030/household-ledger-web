import React from 'react';
import styled from 'styled-components';
import P from './P';
import { theme } from '@/styles';
import IconButton from './IconButton';
import { useRouter } from 'next/navigation';

interface IHeaderProps {
  title: string;
  goback?: boolean;
  canCreate?: boolean;
}

export default function Header({ title, goback = true, canCreate = false }: IHeaderProps) {
  const router = useRouter();
  return (
    <Wrapper>
      {goback ? (
        <IconButton
          iconName="arrow_back_ios"
          size="2.4rem"
          onClick={() => {
            router.back();
          }}
        />
      ) : (
        <IconButton iconName="bar_chart" size="2.4rem" />
      )}
      <Title>{title}</Title>

      {canCreate ? (
        <IconButton
          iconName="add"
          size="2.4rem"
          onClick={() => {
            router.push('/ledger');
          }}
        />
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
