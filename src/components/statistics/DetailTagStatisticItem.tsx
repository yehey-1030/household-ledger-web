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
}

function DetailTagStatisticItem({ tagID, total, parentTagTotal }: IDetailTagStatisticItem) {
  const { tagStatistic } = useTagStatistic(tagID);
  if (!tagStatistic) {
    return <Loading />;
  }

  return (
    <CustomLink href={`/statistics/${tagID}`}>
      <Wrapper>
        <HashTagButton isSelected label={tagStatistic.tagName} />
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

const Wrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  padding: 1rem 1rem;
  margin-bottom: 0.5rem;

  background-color: ${theme.color.MAJOR_GREEN[300]};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoText = styled(P).attrs({
  fontWeight: theme.font.fontWeight.regular,
})``;
