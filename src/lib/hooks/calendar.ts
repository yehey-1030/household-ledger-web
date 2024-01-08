import { useRecoilValue } from 'recoil';
import { monthYearFilter } from '../store';

export const useMonthController = () => {
  const date = useRecoilValue(monthYearFilter);

  const decreaseMonth = () => {
    const newDate = new Date(date.targetMonthYear.setMonth(date.targetMonthYear.getMonth() - 1));
    return newDate;
  };
  const increaseMonth = () => {
    const newDate = new Date(date.targetMonthYear.setMonth(date.targetMonthYear.getMonth() + 1));
    return newDate;
  };

  return { decreaseMonth, increaseMonth };
};
