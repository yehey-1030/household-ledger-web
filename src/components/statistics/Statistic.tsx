import { Layout, Loading } from '@/components/common';
import { TagStatisticList, TotalInfoBox } from '@/components/statistics';
import { useBasicTagStatisticList, useRootTagStatisticList, useTotalSum } from '@/lib/hooks';
import { defaultStatisticFilter } from '@/lib/store/statistics';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

function Statistic() {
  const { totalAmount } = useTotalSum();
  const { statisticList: rootTagStatisticList } = useRootTagStatisticList();
  const { basicStatisticList } = useBasicTagStatisticList();
  const [isLoading, setIsLoading] = useState(false);
  const filter = useRecoilValue(defaultStatisticFilter);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 250);
  }, [filter]);

  return (
    <Layout sidePadding>
      {isLoading && <Loading />}
      <TotalInfoBox label="총 지출" typeID={3} totalAmount={totalAmount.totalAmount} />

      <TagStatisticList title="지출 순위" statisticList={rootTagStatisticList} totalAmount={totalAmount.totalAmount} />
      <TagStatisticList
        title="기본태그 통계"
        statisticList={basicStatisticList}
        totalAmount={totalAmount.totalAmount}
      />
    </Layout>
  );
}

export default Statistic;
