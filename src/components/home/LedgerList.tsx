import styled from 'styled-components';
import { LedgerItem } from '../ledgers';
import { useLedgerList } from '@/lib/hooks';

export default function LedgerList() {
  const { ledgersData } = useLedgerList();
  return (
    <Wrapper>
      {ledgersData.map((ledger) => (
        <LedgerItem
          key={ledger.ledgerID}
          title={ledger.title}
          date={ledger.date}
          amount={ledger.amount}
          category={ledger.archiveType}
          tags={ledger.tagList}
          memo={ledger.memo}
          ledgerID={ledger.ledgerID}
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.7rem 3.5rem;

  @media screen and (min-width: 641px) {
    display: grid;
    /* flex-wrap: wrap; */
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
    column-gap: 1rem;
  }
`;
