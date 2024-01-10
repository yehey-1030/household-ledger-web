import { Layout, Loading, Modal } from '@/components/common';
import { TagStatisticList, TotalInfoBox } from '@/components/statistics';
import { useBasicTagStatisticList, useRootTagStatisticList, useTotalSum } from '@/lib/hooks';
import { useIsLoggedIn } from '@/lib/hooks/auth';
import { defaultStatisticFilter } from '@/lib/store';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

interface IStatisticProps {
  typeID: number;
}

function Statistic({ typeID }: IStatisticProps) {
  const { totalAmount } = useTotalSum();
  const { statisticList: rootTagStatisticList } = useRootTagStatisticList();
  const { basicStatisticList } = useBasicTagStatisticList();
  const { isLoggedIn, isModalOpen, closeModal } = useIsLoggedIn();

  const [isLoading, setIsLoading] = useState(false);
  const filter = useRecoilValue(defaultStatisticFilter);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 250);
  }, [filter]);

  return (
    <Layout sidePadding>
      {isModalOpen && (
        <Modal title="로그인이 필요합니다." buttonLabel="확인" onClose={closeModal} onComplete={closeModal} />
      )}
      {isLoggedIn && isLoading && <Loading />}
      {isLoggedIn && (
        <>
          <TotalInfoBox label="총 지출" typeID={typeID} totalAmount={totalAmount.totalAmount} />

          <TagStatisticList
            title={`지출 순위${typeID}`}
            statisticList={rootTagStatisticList}
            totalAmount={totalAmount.totalAmount}
          />
        </>
      )}
      {String(typeID) === '3' && (
        <TagStatisticList
          title="기본태그 통계"
          statisticList={basicStatisticList}
          totalAmount={totalAmount.totalAmount}
        />
      )}
    </Layout>
  );
}

export default Statistic;
