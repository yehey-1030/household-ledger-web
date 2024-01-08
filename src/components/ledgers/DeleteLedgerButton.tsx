import { IconButton, Modal, P } from '../common';
import { theme } from '@/styles';
import { useLedgerDelete } from '@/lib/hooks';
import styled from 'styled-components';

interface IDeleteLedgerButton {
  ledgerID: number;
  date: string;
}
function DeleteLedgerButton({ ledgerID, date }: IDeleteLedgerButton) {
  const { isModalOpen, handleDeleteClicked, handleSubmit, closeModal } = useLedgerDelete();
  return (
    <>
      <IconButton iconName="delete" color={theme.color.GREY[200]} onClick={() => handleDeleteClicked(ledgerID, date)} />
      {isModalOpen && (
        <Modal title="내역을 삭제하시겠습니까?" buttonLabel="삭제" onClose={closeModal} onComplete={handleSubmit}>
          <WarningText>❗️삭제된 내역은 복원되지 않습니다.</WarningText>
        </Modal>
      )}
    </>
  );
}

export default DeleteLedgerButton;

const WarningText = styled(P).attrs({
  fontSize: theme.font.fontSize[15],
  fontWeight: theme.font.fontWeight.regular,
})`
  margin: 1rem 0rem 2rem;
`;
