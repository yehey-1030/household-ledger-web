import styled from 'styled-components';
import { Divider, P } from '../common';
import { theme } from '@/styles';
import TagStatisticItem from './TagStatisticItem';

interface ITagStatisticListProps {
  title: string;
}

function TagStatisticList({ title }: ITagStatisticListProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      {mock.map((m) => {
        return <TagStatisticItem tagName={m.tagName} amount={m.amount} percentage={m.percentage} />;
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

const mock = [
  { tagName: '식비', amount: 100000, percentage: 10 },
  { tagName: '생활비', amount: 100000, percentage: 10 },
  { tagName: '꾸밈비', amount: 100000, percentage: 10 },
  { tagName: '건강비', amount: 100000, percentage: 10 },
  { tagName: '유흥비', amount: 100000, percentage: 10 },
  { tagName: '자기계발', amount: 100000, percentage: 10 },
  { tagName: '경조사비', amount: 100000, percentage: 10 },
];
