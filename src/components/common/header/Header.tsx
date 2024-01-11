import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import P from '../P';
import { theme } from '@/styles';
import { usePathname, useRouter } from 'next/navigation';

import HeaderIconButton from './HeaderIconButton';
import DrawerIconButton from './DrawerIconButton';
import { useRecoilValue } from 'recoil';
import { currentArchiveTypeColor } from '@/lib/store';

interface IHeaderProps {
  title: string;
  goback?: boolean;
  hasShadow?: boolean;
  hasDrawer?: boolean;
}

export default function Header({ title, goback = true, hasShadow = false, hasDrawer = false }: IHeaderProps) {
  const router = useRouter();
  const [color, setColor] = useState(theme.color.MAJOR_GREEN[100]);
  const currentPath = usePathname();
  const archiveTypeColor = useRecoilValue(currentArchiveTypeColor);

  useEffect(() => {
    if (currentPath.includes('statistics')) {
      setColor(theme.color.LEDGER_HASHTAG_COLOR[archiveTypeColor]);
    }
  }, [archiveTypeColor]);

  return (
    <Wrapper hasShadow={hasShadow}>
      {goback ? <HeaderIconButton iconName="arrow_back_ios" color={color} onClick={() => router.back()} /> : <Empty />}
      <Title color={color}>{title}</Title>

      {hasDrawer ? <DrawerIconButton color={color} /> : <Empty />}
    </Wrapper>
  );
}

const Wrapper = styled.header<{ hasShadow: boolean }>`
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

  box-shadow: ${(props) => (props.hasShadow ? `0px 1px 4px 0px ${theme.color.GREY[300]}` : 'none')};

  z-index: 7;
  /* margin-bottom: 1rem; */
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[24],
  fontWeight: theme.font.fontWeight.bold,
})<{ color: string }>`
  color: ${(props) => props.color};
`;

const Empty = styled.div`
  min-width: 2.4rem;
  min-height: 6rem;
`;
