import styled from 'styled-components';
import { LedgerItem } from '../ledgers';
import { useLedgerList } from '@/lib/hooks/ledger';

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
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.7rem 3.5rem;
`;
