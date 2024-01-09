import styled from 'styled-components';
import { Layout, P } from '../common';
import { theme } from '@/styles';
import { useLedgerIDList, useTagStatistic } from '@/lib/hooks';
import { LedgerItem } from '../ledgers';
import { useRecoilValue } from 'recoil';
import { defaultStatisticFilter } from '@/lib/store';

interface IDetailLedgersProps {
  tagID: number;
}

function DetailLedgerList({ tagID }: IDetailLedgersProps) {
  const filter = useRecoilValue(defaultStatisticFilter);
  const { tagStatistic } = useTagStatistic(tagID);
  const { result: ledgerList } = useLedgerIDList(tagStatistic.ledgerList ?? []);
  return (
    <Layout sidePadding>
      <InfoWrapper>
        <TagText>#{tagStatistic.tagName}</TagText>
        <DateText>
          {filter.start} ~ {filter.end}
        </DateText>
      </InfoWrapper>
      {ledgerList.length === 0 && <InfoText>내역이 없습니다</InfoText>}
      {ledgerList.map(({ data }) => {
        return (
          <LedgerItem
            ledgerID={data.ledgerID}
            key={data.ledgerID}
            title={data.title}
            date={data.date}
            amount={data.amount}
            tags={data.tagList}
            category={data.archiveType}
            memo={data.memo}
          />
        );
      })}
    </Layout>
  );
}
export default DetailLedgerList;

const TagText = styled(P).attrs({
  fontSize: theme.font.fontSize[20],
  fontWeight: theme.font.fontWeight.semibold,
  color: theme.color.MAJOR_GREEN[200],
})``;

const DateText = styled(P).attrs({
  fontSize: theme.font.fontSize[14],
  fontWeight: theme.font.fontWeight.semibold,
  color: theme.color.MAJOR_GREEN[200],
})``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
`;

const InfoText = styled(P).attrs({
  fontSize: theme.font.fontSize[16],
})`
  position: absolute;
  text-align: center;
  top: 40%;
`;
