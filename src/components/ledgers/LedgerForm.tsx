import { theme } from '@/styles';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useBasicTags, useChildTagList, useRootTag, useArchiveTypes, useLedgerForm } from '@/lib/hooks';
import { TagButtonGroup, Select, BottomButton, Input, HashTagButton, DatePickerButton, CheckBox } from '../common';
import CreateTagButton from './CreateTagButton';
import { TagType } from '@/types';
import { useRecoilValue } from 'recoil';
import { ledgerForm } from '@/lib/store';

interface ILedgerFormProps {
  onSubmit: () => void;
}

function LedgerForm({ onSubmit }: ILedgerFormProps) {
  const form = useRecoilValue(ledgerForm);
  const {
    handleInputChange,
    handleCategorySelect,
    handleRootTagSelect,
    handleHashTagSelect,
    handleDateSelect,
    handleCheckBox,
    isValid,
  } = useLedgerForm();

  const { archiveTypeList } = useArchiveTypes();
  const { selectableTagList } = useRootTag(form.typeID);
  const { basicTags } = useBasicTags(form.typeID);
  const { childTagList } = useChildTagList(form.tagList);

  const [currentTagList, setCurrentTagList] = useState<TagType[]>([]);

  useEffect(() => {
    if (form.tagList.length === 0 && selectableTagList) {
      setCurrentTagList(selectableTagList);
    } else if (selectableTagList) {
      setCurrentTagList(selectableTagList?.filter((tag) => form.tagList.includes(tag.tagID)));
      setCurrentTagList((prev) => [...prev, ...childTagList]);
    }
  }, [form.typeID, form.tagList, childTagList]);

  return (
    <Wrapper>
      <TagButtonGroup tags={archiveTypeList} currentSelected={form.typeID} handleClick={handleCategorySelect} />
      <DateSelectWrapper>
        <DateWrapper>
          <DatePickerButton label="날짜" name="date" onChange={handleDateSelect} selected={form.date} />
        </DateWrapper>
        <DateWrapper>
          {selectableTagList && selectableTagList?.length !== 0 && (
            <Select
              label="카테고리"
              selectList={selectableTagList.map((tag) => {
                return { optionID: tag.tagID, name: tag.name };
              })}
              handleSelect={handleRootTagSelect}
              tagList={form.tagList}
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
      <CheckBox label="통계 제외" name="isExcluded" onChange={handleCheckBox} checked={form.isExcluded} />
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
        <CreateTagButton parentTagList={currentTagList} categoryTypeID={form.typeID} />
      </HashTagWrapper>
      <W>
        <ButtonWrapper>
          <BottomButton btnType={isValid ? 'primary' : 'line'} disabled={!isValid} onClick={onSubmit}>
            추가하기
          </BottomButton>
        </ButtonWrapper>
      </W>
    </Wrapper>
  );
}

export default React.memo(LedgerForm);

const Wrapper = styled.div`
  background-color: ${theme.color.MAJOR_GREEN[300]};
  border-radius: 4rem 4rem 0 0;
  filter: drop-shadow(2px -1px 8px rgba(0, 0, 0, 0.12));

  padding: 3.5rem 1.7rem;
  /* height: calc(100% - 6rem); */
  min-height: calc(100vh - 6rem);
  height: calc(100vh - 6rem);

  display: flex;
  flex-direction: column;

  width: 100%;
  position: relative;
  z-index: 9;
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
  align-items: center;
`;
