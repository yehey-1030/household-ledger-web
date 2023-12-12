import styled from 'styled-components';
import { HashTag } from '.';
import { TagType } from '@/types/tag';

interface IHashTagGroupProps {
  tagList: TagType[];
  handleSelect: (tagID: number) => void;
}

function HashTagGroup({ tagList, handleSelect }: IHashTagGroupProps) {
  return (
    <Wrapper>
      {tagList.map((tag) => (
        <HashTag label={tag.name} key={tag.tagID} isSelected={false} onClick={() => handleSelect(tag.tagID)} />
      ))}
    </Wrapper>
  );
}

export default HashTagGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
