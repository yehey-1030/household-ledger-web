import { theme } from '@/styles';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '@/lib/api/category';
import { useBasicTags, useChildTagList, useRootTag, useLedgerCreate } from '@/lib/hooks';
import { TagButtonGroup, Select, BottomButton, Input, HashTagButton } from '../common';
import CreateTagButton from './CreateTagButton';
import { TagType } from '@/types';

function PostLedger() {
  const {
    form,
    handleInputChange,
    handleCategorySelect,
    handleRootTagSelect,
    handleHashTagSelect,
    checkValid,
    onSubmit,
  } = useLedgerCreate();

  const { selectableTagList } = useRootTag(form.typeID);
  const { basicTags } = useBasicTags(form.typeID);
  const { childTagList } = useChildTagList(form.tagList);
  const { data } = useQuery({ queryKey: ['categories'], queryFn: () => getCategories() });

  const [currentTagList, setCurrentTagList] = useState<TagType[]>([]);

  React.useEffect(() => {
    if (form.tagList.length === 0 && selectableTagList) {
      setCurrentTagList(selectableTagList);
    } else if (selectableTagList) {
      setCurrentTagList(selectableTagList?.filter((tag) => form.tagList.includes(tag.tagID)));
      setCurrentTagList((prev) => [...prev, ...childTagList]);
    }
  }, [form.typeID, form.tagList, childTagList]);

  return (
    <Wrapper>
      {data && <TagButtonGroup tags={data} currentSelected={form.typeID} handleClick={handleCategorySelect} />}
      <DateSelectWrapper>
        <DateWrapper>
          <Input label="날짜" type="date" name="date" onChange={handleInputChange} value={form.date} />
        </DateWrapper>
        <DateWrapper>
          {selectableTagList && selectableTagList?.length !== 0 && (
            <Select
              label="카테고리"
              selectList={selectableTagList.map((tag) => {
                return { optionID: tag.tagID, name: tag.name };
              })}
              handleSelect={handleRootTagSelect}
            />
          )}
        </DateWrapper>
      </DateSelectWrapper>
      <Input
        label="내역명"
        placeholder="내역을 입력해주세요"
        name="title"
        onChange={handleInputChange}
        value={form.title}
      />
      <Input
        label="금액"
        placeholder="금액을 입력해주세요"
        type="number"
        name="amount"
        onChange={handleInputChange}
        value={form.amount}
      />
      <Input
        label="메모"
        placeholder="메모를 입력해주세요"
        name="memo"
        onChange={handleInputChange}
        value={form.memo}
      />

      <HashTagWrapper>
        {form.typeID === 3 &&
          basicTags?.map((tag) => (
            <HashTagButton
              label={tag.name}
              key={tag.tagID}
              isSelected={form.tagList.includes(tag.tagID)}
              onClick={() => handleHashTagSelect(tag, basicTags)}
            />
          ))}
        {childTagList &&
          childTagList.map((tag) => (
            <HashTagButton
              label={tag.name}
              key={tag.tagID}
              isSelected={form.tagList.includes(tag.tagID)}
              onClick={() => handleHashTagSelect(tag, childTagList)}
            />
          ))}
      </HashTagWrapper>
      <CreateTagButton parentTagList={currentTagList} categoryTypeID={form.typeID} />
      <W>
        <ButtonWrapper>
          <BottomButton btnType={checkValid ? 'primary' : 'line'} disabled={!checkValid} onClick={onSubmit}>
            추가하기
          </BottomButton>
        </ButtonWrapper>
      </W>
    </Wrapper>
  );
}

export default React.memo(PostLedger);

const Wrapper = styled.div`
  background-color: ${theme.color.MAJOR_GREEN[300]};
  border-radius: 4rem 4rem 0 0;
  filter: drop-shadow(2px -3px 10px rgba(0, 0, 0, 0.12));
  padding: 3.5rem 1.7rem;
  /* height: calc(100% - 6rem); */
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

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
