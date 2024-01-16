import { useLedgerUpdate } from '@/lib/hooks';
import LedgerForm from './LedgerForm';

interface IUpdateLedgerProps {
  ledgerID: number;
}

function UpdateLedger({ ledgerID }: IUpdateLedgerProps) {
  const { updateLedger } = useLedgerUpdate(ledgerID);

  return <LedgerForm onSubmit={updateLedger} />;
}

export default UpdateLedger;
