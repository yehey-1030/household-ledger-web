import styled from 'styled-components';
import { ITag } from '@/interfaces/ITag';
import TagButton from './TagButton';
import { useState } from 'react';

export interface ITagGroupProps {
  tags: ITag[];
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
          <TagButton
            tagInfo={tag}
            isSelected={selected === tag.tagID}
            onClick={() => handleTagButtonClicked(tag.tagID)}
            key={tag.tagID}
          />
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
