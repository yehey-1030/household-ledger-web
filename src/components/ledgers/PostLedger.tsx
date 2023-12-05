import { theme } from '@/styles';
import React from 'react';
import styled from 'styled-components';
import TagButtonGroup from '../common/TagButtonGroup';
import Input from '../common/Input';
import Select from '../common/Select';
import BottomButton from '../common/BottomButton';

interface IPostLedgerProps {}

function PostLedger({}: IPostLedgerProps) {
  return (
    <Wrapper>
      <TagButtonGroup tags={categories} />
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

      <BottomButton btnType="line" disabled>
        추가하기
      </BottomButton>
    </Wrapper>
  );
}

export default React.memo(PostLedger);

const categories = [
  { tagID: 1, tagName: '지출' },
  { tagID: 2, tagName: '수입' },
  { tagID: 3, tagName: '저축' },
  { tagID: 4, tagName: '투자' },
];

const selects = [
  { tagID: 1, tagName: '식비' },
  { tagID: 2, tagName: '꾸밈비' },
  { tagID: 3, tagName: '생활비' },
  { tagID: 4, tagName: '건강비' },
];

const Wrapper = styled.div`
  background-color: ${theme.color.MAJOR_GREEN[300]};
  border-radius: 4rem 4rem 0 0;
  filter: drop-shadow(2px -3px 10px rgba(0, 0, 0, 0.12));
  padding: 3.5rem 1.7rem;
  min-height: calc(100vh - 8rem);
  padding: 3.5rem 1.7rem;
  position: absolute;
  width: 100%;
  bottom: 0;
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
