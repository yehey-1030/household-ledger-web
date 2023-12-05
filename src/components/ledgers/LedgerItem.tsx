import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles';
import { amountTostring } from '@/lib/utils/string';
import { P } from '../common';
import { ITag } from '@/interfaces/ITag';

interface ILedgerItemProps {
  title: string;
  date: string;
  amount: number;
  tags?: ITag[];
  category: string;
}

export default function LedgerItem(props: ILedgerItemProps) {
  const { title, date, amount, tags, category } = props;
  return (
    <Wrapper>
      <DTWrapper>
        <Date>{date}</Date>
        <Title>{title}</Title>
      </DTWrapper>
      <Amount>{amountTostring(amount)}</Amount>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.9rem 1.5rem;
  background-color: ${theme.color.MAJOR_GREEN[300]};
  width: 100%;
  height: 4.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 0.5rem;
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
  fontSize: theme.font.fontSize[20],
  fontWeight: theme.font.fontWeight.semibold,
})``;

const Amount = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;
