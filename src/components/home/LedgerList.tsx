import styled from 'styled-components';
import { LedgerItem } from '../ledgers';
import { useLedgerList } from '@/lib/hooks';
import { useIsLoggedIn } from '@/lib/hooks/auth';
import { Modal } from '../common';

export default function LedgerList() {
  const { isLoggedIn, isModalOpen, closeModal } = useIsLoggedIn();
  const { ledgersData } = useLedgerList();

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal title="로그인이 필요합니다." buttonLabel="확인" onClose={closeModal} onComplete={closeModal} />
      )}
      {isLoggedIn &&
        ledgersData.map((ledger) => (
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
