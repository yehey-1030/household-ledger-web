import { theme } from '@/styles';
import styled from 'styled-components';
import DatePickerButton from '../common/DatePickerButton';
import { P } from '../common';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { defaultStatisticFilter } from '@/lib/store';
import { amountTostring, formatDate } from '@/lib/utils/string';
import { getValidKey } from '@/styles/color';

interface ITotalInfoBoxProps {
  label: string;
  typeID: number;
  totalAmount: number;
}

function TotalInfoBox({ label, typeID, totalAmount }: ITotalInfoBoxProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const [filter, setFilter] = useRecoilState(defaultStatisticFilter);

  useEffect(() => {
    setFilter({
      start: filter.start,
      end: filter.end,
      archiveTypeID: typeID,
    });
  }, []);

  const customDate = (date: Date | null, name: string) => {
    setFilter((prev) => ({ ...prev, [name]: formatDate(date ?? new Date()) }));
  };

  return (
    <Wrapper>
      <Box onClick={() => setIsDatePickerOpen(!isDatePickerOpen)} categoryID={typeID.toString()}>
        <DateText>
          {filter.start} ~ {filter.end}
        </DateText>
        <Label>{label}</Label>
        <Amount>{amountTostring(totalAmount)}</Amount>
      </Box>
      <ExtendWrapper isOpen={isDatePickerOpen}>
        <DatePickerButton
          color={theme.color.LEDGER_BACKGROUND[getValidKey(typeID.toString())]}
          selected={filter.start}
          name="start"
          onChange={customDate}
        />
        <DatePickerButton
          color={theme.color.LEDGER_BACKGROUND[getValidKey(typeID.toString())]}
          selected={filter.end}
          name="end"
          onChange={customDate}
        />
      </ExtendWrapper>
    </Wrapper>
  );
}

export default TotalInfoBox;

const Wrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0 2.5rem;
`;
const Box = styled.div<{ categoryID: string }>`
  width: 100%;
  background-color: ${({ categoryID }) => theme.color.LEDGER_HASHTAG_COLOR[getValidKey(categoryID)]};
  padding: 0.8rem 1.8rem 1.5rem 1.8rem;
  border-radius: 1.5rem;

  display: grid;
  grid-template:
    'date date'
    'label amount';
  row-gap: 0.8rem;
  column-gap: 1rem;
  justify-content: space-between;
`;

const DateText = styled(P).attrs({
  fontSize: theme.font.fontSize[14],
  fontWeight: theme.font.fontWeight.regular,
  color: theme.color.WHITE,
})`
  grid-area: date;
`;

const InfoText = styled(P).attrs({
  fontSize: theme.font.fontSize[15],
  fontWeight: theme.font.fontWeight.semibold,
  color: theme.color.WHITE,
})``;

const Label = styled(InfoText)`
  grid-area: label;
`;

const Amount = styled(InfoText)`
  grid-area: amount;
  text-align: right;
  justify-self: end;
`;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  margin-top: ${(props) => (props.isOpen ? '1rem' : 0)};

  overflow: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;
