import styled from 'styled-components';
import { useSelectDetailTagStatistic } from '@/lib/hooks';
import { HashTagButton } from '../common';
import DetailTagStatisticItem from './DetailTagStatisticItem';

interface IDetailTagStatisticList {
  total: number;
  parentTagTotal: number;
  currentTag: number;
}

function DetailTagStatisticList({ total, parentTagTotal, currentTag }: IDetailTagStatisticList) {
  const { childTagList, selectedList, isSelected, handleHashTagClicked } = useSelectDetailTagStatistic(currentTag);
  return (
    <Wrapper>
      <TagWrapper>
        {childTagList?.map((tag) => (
          <HashTagButton
            key={tag.tagID}
            label={tag.name}
            isSelected={isSelected(tag.tagID)}
            onClick={() => handleHashTagClicked(tag.tagID)}
          />
        ))}
      </TagWrapper>
      <DetailWrapper>
        {selectedList?.map((tagID) => (
          <DetailTagStatisticItem tagID={tagID} total={total} parentTagTotal={parentTagTotal} />
        ))}
      </DetailWrapper>
    </Wrapper>
  );
}

export default DetailTagStatisticList;

const Wrapper = styled.div`
  width: 100%;
  padding: 0rem 0.7rem 1rem;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 0.7rem;
`;
