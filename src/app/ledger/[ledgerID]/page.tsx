import { Header, Layout } from '@/components/common';
import { UpdateLedger } from '@/components/ledgers';

function LedgerUpdatePage({ params }: { params: { ledgerID: number } }) {
  return (
    <Layout>
      <Header title="내역 수정" />
      <UpdateLedger ledgerID={params.ledgerID} />
    </Layout>
  );
}
export default LedgerUpdatePage;
