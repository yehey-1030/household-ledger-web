import styled from 'styled-components';
import TagButton from './TagButton';
import { CategoryType } from '@/types/tag';

export interface ITagGroupProps {
  tags: CategoryType[];
  currentSelected: number;
  handleClick: (categoryID: number) => void;
}

function TagButtonGroup({ tags, handleClick, currentSelected }: ITagGroupProps) {
  return (
    <Wrapper>
      {tags.map((tag) => {
        return (
          tag.archiveTypeID !== 6 && (
            <TagButton
              tagInfo={tag}
              isSelected={currentSelected === tag.archiveTypeID}
              onClick={() => handleClick(tag.archiveTypeID)}
              key={tag.archiveTypeID}
            />
          )
        );
      })}
    </Wrapper>
  );
}

export default TagButtonGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
