import React, { useState } from 'react';
import styled from 'styled-components';
import { amountTostring } from '@/lib/utils/string';
import { HashTagGroup, IconButton, P } from '../common';
import { ArchiveType, TagType } from '@/types';
import { theme } from '@/styles';
import DeleteLedgerButton from './DeleteLedgerButton';
import { getValidKey } from '@/styles/color';
import { useRouter } from 'next/navigation';

interface ILedgerItemProps {
  ledgerID: number;
  title: string;
  date: string;
  amount: number;
  tags: TagType[];
  category: ArchiveType;
  memo: string | null;
}

export default function LedgerItem(props: ILedgerItemProps) {
  const { title, date, amount, category, tags, memo, ledgerID } = props;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toShortDate = (target: string) => {
    const month = target.split('-')[1];
    const day = target.split('-')[2];

    return `${month}/${day}`;
  };
  return (
    <Wrapper categoryID={category.archiveTypeID.toString()}>
      <BasicWrapper onClick={() => setIsOpen(!isOpen)}>
        <DTWrapper>
          <Date>{toShortDate(date)}</Date>
          <Title>{title}</Title>
        </DTWrapper>
        <Amount>{amountTostring(amount)}</Amount>
      </BasicWrapper>
      <ExtendWrapper isOpen={isOpen}>
        <Memo>{memo}</Memo>
        <TagIconWrapper>
          <HashTagGroup tagList={tags ?? []} typeID={category.archiveTypeID.toString()} />
          <IconButton
            iconName="edit"
            color={theme.color.GREY[200]}
            onClick={() => router.push(`/ledger/${ledgerID}`)}
          />
          <DeleteLedgerButton ledgerID={ledgerID} date={date} />
        </TagIconWrapper>
      </ExtendWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ categoryID: string }>`
  padding: 1.2rem 1.5rem;
  background-color: ${(props) => theme.color.LEDGER_BACKGROUND[getValidKey(props.categoryID)]};
  width: 100%;
  /* height: 4.2rem; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 641px) {
    /* width: 28rem; */
    justify-self: start;
  }
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

const Memo = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
  fontSize: theme.font.fontSize[14],
  color: theme.color.GREY[100],
})``;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  padding-top: ${(props) => (props.isOpen ? '1rem' : 0)};
  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  overflow: hidden;
  @media screen and (min-width: 641px) {
    max-height: none;
  }
`;

const TagIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2rem 2rem;
  column-gap: 1rem;
  grid-template-areas: 'tags icon';

  align-items: end;
`;
