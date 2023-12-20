import styled from 'styled-components';
import { Divider, HashTagButton, P } from '../common';
import { theme } from '@/styles';
import { amountTostring } from '@/lib/utils/string';

interface ITagStatisticItemProps {
  tagName: string;
  amount: number;
  percentage: number;
}

function TagStatisticItem({ tagName, amount, percentage }: ITagStatisticItemProps) {
  return (
    <>
      <Wrapper>
        <HashTagButton isSelected label={tagName} />
        <AmountText>
          {amountTostring(amount)} | {percentage}%
        </AmountText>
      </Wrapper>
      <Divider />
    </>
  );
}

export default TagStatisticItem;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AmountText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;
