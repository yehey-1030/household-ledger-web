import { ITag } from '@/interfaces/ITag';
import { theme } from '@/styles';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ISelectProps {
  label: string;
  selectList: ITag[];
}

function Select({ label, selectList }: ISelectProps) {
  const [selected, setSelected] = useState(selectList[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClicked = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.currentTarget;
    const tag = selectList.filter((option) => {
      return option.tagName === innerText;
    });

    setSelected(tag[0]);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput
        onClick={() => {
          setIsOpen((open) => !open);
        }}
      >
        {selected.tagName}
      </StyledInput>

      <SelectWrapper isOpen={isOpen}>
        {selectList.map((tag) => {
          return (
            <Option key={tag.tagID} onClick={handleOptionClicked}>
              {tag.tagName}
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

const StyledInput = styled.div`
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  border-radius: 0.8rem;

  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  background-color: ${theme.color.WHITE};
  border: none;
  outline: none;

  ::placeholder {
    color: ${theme.color.GREY[300]};
    font-size: ${theme.font.fontSize[14]};
    font-weight: ${theme.font.fontWeight.regular};
  }
  cursor: pointer;
`;

const SelectWrapper = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 6.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.WHITE};
  border-radius: 0.8rem;

  max-height: ${(props) => (props.isOpen ? 'none' : 0)};
  margin-top: ${(props) => (props.isOpen ? '0.4rem' : 0)};
  overflow: hidden;
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
const Option = styled.li`
  padding: 0.5rem 1.3rem;
  font-size: ${theme.font.fontSize[14]};
  font-weight: ${theme.font.fontWeight.regular};
  color: ${theme.color.GREY[200]};
  height: 3rem;
  background-color: ${theme.color.WHITE};
  &:hover {
    background-color: ${theme.color.MAJOR_GREEN[100]};
    color: ${theme.color.WHITE};
  }
  display: flex;
  align-items: center;
`;
