import styled from 'styled-components';
import { Divider, P } from '../common';
import { theme } from '@/styles';
import TagStatisticItem from './TagStatisticItem';
import { IStatistic } from '@/interfaces/statistics';

interface ITagStatisticListProps {
  title: string;
  statisticList: IStatistic[];
  totalAmount: number;
}

function TagStatisticList({ title, statisticList, totalAmount }: ITagStatisticListProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      {statisticList.map((statistic) => {
        return (
          <TagStatisticItem
            tagName={statistic.tagName}
            amount={statistic.totalAmount}
            percentage={(statistic.totalAmount / totalAmount) * 100}
          />
        );
      })}
    </Wrapper>
  );
}
export default TagStatisticList;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
`;
const Title = styled(P).attrs({
  fontSize: theme.font.fontSize[15],
  fontWeight: theme.font.fontWeight.semibold,
})`
  margin-bottom: 0.8rem;
`;
