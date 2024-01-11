'use client';

import styled from 'styled-components';
import P from '../P';
import { theme } from '@/styles';
import DrawerIconButton from './DrawerIconButton';
import HeaderIconButton from './HeaderIconButton';
import { useRouter } from 'next/navigation';

function HomeHeader() {
  const router = useRouter();

  return (
    <Wrapper>
      <Title>언니의 가계부</Title>
      <IconWrapper>
        <HeaderIconButton iconName="add" onClick={() => router.push('/ledger')} />
        <DrawerIconButton />
      </IconWrapper>
    </Wrapper>
  );
}

export default HomeHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${theme.color.WHITE};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  padding: 0 1.5rem;
  z-index: 7;
`;

const IconWrapper = styled.div`
  display: grid;
  column-gap: 1rem;

  grid-template-columns: 1fr 1fr;
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[24],
  fontWeight: theme.font.fontWeight.bold,
})`
  color: ${theme.color.MAJOR_GREEN[100]};
`;
