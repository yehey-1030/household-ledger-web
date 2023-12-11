import styled from 'styled-components';
import TagButton from './TagButton';
import { useState } from 'react';
import { CategoryType } from '@/types/tag';

export interface ITagGroupProps {
  tags: CategoryType[];
}

function TagButtonGroup({ tags }: ITagGroupProps) {
  const [selected, setSelected] = useState<number>();

  const handleTagButtonClicked = (tagID: number) => {
    if (selected === tagID) {
      setSelected(0);
    } else {
      setSelected(tagID);
    }
  };

  return (
    <Wrapper>
      {tags.map((tag) => {
        return (
          tag.archiveTypeID !== 6 && (
            <TagButton
              tagInfo={tag}
              isSelected={selected === tag.archiveTypeID}
              onClick={() => handleTagButtonClicked(tag.archiveTypeID)}
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
