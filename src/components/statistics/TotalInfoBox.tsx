import { theme } from '@/styles';
import styled from 'styled-components';
import { Input, P } from '../common';
import { useState } from 'react';
import { formatDate, getFirstDay, getLastDay } from '@/lib/utils/string';

interface ITotalInfoBoxProps {
  label: string;
  typeID: number;
}

function TotalInfoBox({ label, typeID }: ITotalInfoBoxProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    start: formatDate(getFirstDay(new Date())),
    end: formatDate(getLastDay(new Date())),
  });

  const customDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCurrentDate((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Wrapper>
      <Box onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}>
        <DateText>
          {currentDate.start}~{currentDate.end}
        </DateText>
        <Label>{label}</Label>
        <Amount>1,000,000원</Amount>
      </Box>
      <ExtendWrapper isOpen={isDatePickerOpen}>
        <Input type="date" isColored value={currentDate.start} name="start" onChange={customDate} />
        <Input type="date" isColored value={currentDate.end} name="end" onChange={customDate} />
      </ExtendWrapper>
    </Wrapper>
  );
}

export default TotalInfoBox;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
`;
const Box = styled.div`
  width: 100%;
  background-color: ${theme.color.MAJOR_GREEN[200]};
  border-radius: 1.5rem;
  padding: 0.8rem 1.8rem 1.5rem 1.3rem;

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
`;

const ExtendWrapper = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  max-height: ${(props) => (props.isOpen ? 'none' : 0)};

  overflow: hidden;
`;
