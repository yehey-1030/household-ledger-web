import styled from 'styled-components';
import { theme } from '@/styles';
import { useRecoilState } from 'recoil';
import { monthYearFilter } from '@/lib/store';
import { IconButton, P } from '../common';
import { useMonthController } from '@/lib/hooks/calendar';

function MonthHeader() {
  const [monthYear, setMonthYear] = useRecoilState(monthYearFilter);
  const { decreaseMonth, increaseMonth } = useMonthController();

  const handleIconClicked = (isIncrease: boolean) => {
    if (isIncrease) {
      setMonthYear({ targetMonthYear: increaseMonth() });
    } else {
      setMonthYear({ targetMonthYear: decreaseMonth() });
    }
  };

  return (
    <Wrapper>
      <IconButton iconName="arrow_left" onClick={() => handleIconClicked(false)} color={theme.color.MAJOR_GREEN[200]} />
      <MonthYearText>
        {monthYear.targetMonthYear.getFullYear()}년 {monthYear.targetMonthYear.getMonth() + 1}월
      </MonthYearText>
      <IconButton iconName="arrow_right" onClick={() => handleIconClicked(true)} color={theme.color.MAJOR_GREEN[200]} />
    </Wrapper>
  );
}

export default MonthHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;
  outline: none;
  border: none;
`;

const MonthYearText = styled(P).attrs({
  fontSize: theme.font.fontSize[20],
  fontWeight: theme.font.fontWeight.semibold,
  color: theme.color.MAJOR_GREEN[200],
})`
  margin: 0 1rem;
`;
