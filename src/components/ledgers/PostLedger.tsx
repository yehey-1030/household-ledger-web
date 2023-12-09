import { theme } from '@/styles';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import TagButtonGroup from '../common/TagButtonGroup';
import Input from '../common/Input';
import Select from '../common/Select';
import BottomButton from '../common/BottomButton';
import HashTagGroup from '../common/HashTagGroup';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/lib/api/category';

interface IPostLedgerProps {}

function PostLedger({}: IPostLedgerProps) {
  const { data, isLoading } = useQuery({ queryKey: ['test'], queryFn: () => getCategories() });

  useEffect(() => {
    console.log(data);
  }, [isLoading, data]);

  return (
    <Wrapper>
      {data ? <TagButtonGroup tags={data} /> : <></>}
      <DateSelectWrapper>
        <DateWrapper>
          <Input label="날짜" type="date" />
        </DateWrapper>
        <DateWrapper>
          <Select label="카테고리" selectList={selects} />
        </DateWrapper>
      </DateSelectWrapper>
      <Input label="내역명" placeholder="내역을 입력해주세요" />
      <Input label="금액" placeholder="금액을 입력해주세요" type="number" />
      <Input label="메모" placeholder="메모를 입력해주세요" />

      <HashTagGroup tagList={tags} />
      <HashTagGroup tagList={tags} />
      <HashTagGroup tagList={tags} />
      <W>
        <ButtonWrapper>
          <BottomButton btnType="line" disabled>
            추가하기
          </BottomButton>
        </ButtonWrapper>
      </W>
    </Wrapper>
  );
}

export default React.memo(PostLedger);

const selects = [
  { tagID: 1, tagName: '식비' },
  { tagID: 2, tagName: '꾸밈비' },
  { tagID: 3, tagName: '생활비' },
  { tagID: 4, tagName: '건강비' },
  { tagID: 5, tagName: '유흥비' },
];
const tags = [
  { tagID: 1, tagName: '식비' },
  { tagID: 2, tagName: '꾸밈비' },
  { tagID: 3, tagName: '생활비' },
  { tagID: 4, tagName: '건강비' },
  { tagID: 5, tagName: '식비' },
  { tagID: 6, tagName: '꾸밈비' },
  { tagID: 7, tagName: '생활비' },
  { tagID: 8, tagName: '건강비' },
];

const Wrapper = styled.div`
  background-color: ${theme.color.MAJOR_GREEN[300]};
  border-radius: 4rem 4rem 0 0;
  filter: drop-shadow(2px -3px 10px rgba(0, 0, 0, 0.12));
  padding: 3.5rem 1.7rem;
  min-height: calc(100vh - 6rem);
  height: calc(100vh - 6rem);

  display: flex;
  flex-direction: column;

  width: 100%;
  position: relative;
`;

const DateSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin-top: 2.5rem;
`;

const DateWrapper = styled.div`
  width: calc(100% / 2 - 0.5rem);
`;
const W = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  max-width: 100%;
  z-index: 2;
  padding-left: inherit;
  padding-right: inherit;
`;
