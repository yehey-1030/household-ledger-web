import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles';
import { amountTostring } from '@/lib/utils/string';
import { HashTagGroup, P } from '../common';
import { ArchiveType, TagType } from '@/types';

interface ILedgerItemProps {
  title: string;
  date: string;
  amount: number;
  tags: TagType[];
  category: ArchiveType;
}

export default function LedgerItem(props: ILedgerItemProps) {
  const { title, date, amount, category, tags } = props;

  const toShortDate = (target: string) => {
    const month = target.split('-')[1];
    const day = target.split('-')[2];

    return `${month}/${day}`;
  };
  return (
    <Wrapper categoryID={category.archiveTypeID.toString()}>
      <BasicWrapper>
        <DTWrapper>
          <Date>{toShortDate(date)}</Date>
          <Title>{title}</Title>
        </DTWrapper>
        <Amount>{amountTostring(amount)}</Amount>
      </BasicWrapper>
      <ExtendWrapper isOpen>
        <HashTagGroup tagList={tags ?? []} handleSelect={() => {}} />
      </ExtendWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ categoryID: string }>`
  padding: 0.9rem 1.5rem;
  background-color: ${(props) => theme.color.LEDGER_BACKGROUND[props.categoryID]};
  width: 100%;
  /* height: 4.2rem; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const BasicWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DTWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Date = styled(P).attrs({
  fontSize: theme.font.fontSize[12],
})`
  margin-right: 1.2rem;
`;

const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[16],
  fontWeight: theme.font.fontWeight.semibold,
})``;

const Amount = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
`;
