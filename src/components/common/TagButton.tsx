import { theme } from '@/styles';
import { CategoryType } from '@/types/tag';
import React from 'react';
import styled from 'styled-components';

export interface ITagProps {
  isSelected?: boolean;
  tagInfo: CategoryType;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function TagButton({ isSelected = false, tagInfo, onClick }: ITagProps) {
  return (
    <StyledButton isSelected={isSelected} onClick={onClick}>
      {tagInfo.name}
    </StyledButton>
  );
}

export default React.memo(TagButton);

const StyledButton = styled.button<{ isSelected: boolean }>`
  font-size: ${theme.font.fontSize[14]};
  width: fit-content;
  outline: none;
  border: none;
  color: ${(props) => (props.isSelected ? theme.color.WHITE : theme.color.MAJOR_GREEN[100])};
  background-color: ${(props) => (props.isSelected ? theme.color.MAJOR_GREEN[100] : theme.color.WHITE)};
  padding: 0.6rem 2rem;
  border-radius: 2rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14);
  transition: all 0.2s;
`;
