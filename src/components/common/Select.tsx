import { theme } from '@/styles';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ISelectProps {
  label: string;
  selectList: { name: string; optionID: number }[];
  handleSelect: (optionID: number) => void;
  selectType?: 'color' | 'none';
  tagList?: number[];
}

function Select({ label, selectList, handleSelect, selectType = 'none', tagList }: ISelectProps) {
  const [selected, setSelected] = useState({ optionID: 0, name: '선택' });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (tagList?.length !== 0) {
      const selectedRoot = selectList.filter((select) => tagList?.includes(select.optionID));
      setSelected(selectedRoot[0]);
    } else {
      setSelected({ optionID: 0, name: '선택' });
    }
  }, [tagList, selectList]);

  const handleOptionClicked = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.currentTarget;
    const selectedList = selectList.filter((option) => {
      return option.name === innerText;
    });

    setSelected(selectedList[0]);
    handleSelect(selectedList[0].optionID);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput
        selectType={selectType}
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {selected ? selected.name : ''}
      </StyledInput>

      <SelectWrapper isOpen={isOpen} selectType={selectType}>
        {selectList?.map((option) => {
          return (
            <Option selectType={selectType} key={option.optionID} onClick={handleOptionClicked}>
              {option.name}
            </Option>
          );
        })}
      </SelectWrapper>
    </Wrapper>
  );
}

export default Select;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const Label = styled.label`
  font-size: ${theme.font.fontSize[16]};
  font-weight: ${theme.font.fontWeight.semibold};
  color: ${theme.color.GREY[200]};
  margin-bottom: 0.8rem;
`;

const StyledInput = styled.div<{ selectType: 'color' | 'none' }>`
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  border-radius: 0.8rem;

  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  background-color: ${(props) => (props.selectType === 'color' ? theme.color.MAJOR_GREEN[300] : theme.color.WHITE)};
  border: none;
  outline: none;

  ::placeholder {
    color: ${theme.color.GREY[300]};
    font-size: ${theme.font.fontSize[14]};
    font-weight: ${theme.font.fontWeight.regular};
  }
  cursor: pointer;
`;

const SelectWrapper = styled.ul<{ isOpen: boolean; selectType: 'color' | 'none' }>`
  position: absolute;
  top: 6.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => (props.selectType === 'color' ? theme.color.MAJOR_GREEN[300] : theme.color.WHITE)};

  border-radius: 0.8rem;
  box-shadow: 0px 1px 4px 0px ${theme.color.GREY[300]};

  max-height: ${(props) => (props.isOpen ? '15rem' : 0)};
  margin-top: ${(props) => (props.isOpen ? '0.4rem' : 0)};
  overflow: ${(props) => (props.isOpen ? 'scroll' : 'hidden')};
  z-index: 5;

  @keyframes dropdown {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: dropdown 4s ease;
`;
const Option = styled.li<{ selectType: 'color' | 'none' }>`
  padding: 0.5rem 1.3rem;
  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  min-height: 3rem;
  background-color: ${(props) => (props.selectType === 'color' ? theme.color.MAJOR_GREEN[300] : theme.color.WHITE)};

  &:hover {
    background-color: ${theme.color.MAJOR_GREEN[100]};
    color: ${theme.color.WHITE};
  }
  display: flex;
  align-items: center;
`;
