import { theme } from '@/styles';
import styled from 'styled-components';
import { HashTagButton, Loading, P } from '../common';
import { amountTostring, setPointToNumber } from '@/lib/utils/string';
import { useTagStatistic } from '@/lib/hooks';
import CustomLink from '../common/CustomLink';

interface IDetailTagStatisticItem {
  tagID: number;
  total: number;
  parentTagTotal: number;
  color?: string;
}

function DetailTagStatisticItem({ tagID, total, parentTagTotal, color = 'green' }: IDetailTagStatisticItem) {
  const { tagStatistic } = useTagStatistic(tagID);
  if (!tagStatistic) {
    return <Loading />;
  }

  return (
    <CustomLink href={`/statistics/detail/${tagID}`}>
      <Wrapper backgroundColor={color}>
        <HashTagButton isSelected label={tagStatistic.tagName} color={theme.color.LEDGER_HASHTAG_COLOR[color]} />
        <InfoText>
          {amountTostring(tagStatistic.totalAmount)} ・{' '}
          {setPointToNumber((tagStatistic.totalAmount / parentTagTotal) * 100)} ・{' '}
          {setPointToNumber((tagStatistic.totalAmount / total) * 100)}
        </InfoText>
      </Wrapper>
    </CustomLink>
  );
}
export default DetailTagStatisticItem;

const Wrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;

  background-color: ${(props) => theme.color.LEDGER_BACKGROUND[props.backgroundColor]};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;
