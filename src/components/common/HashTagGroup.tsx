import styled from 'styled-components';
import { TagType } from '@/types/tag';
import HashTagButton from './HashTagButton';

interface IHashTagGroupProps {
  tagList: TagType[];
  handleSelect: (tagID: number) => void;
}

function HashTagGroup({ tagList, handleSelect }: IHashTagGroupProps) {
  return (
    <Wrapper>
      {tagList.map((tag) => (
        <HashTagButton label={tag.name} key={tag.tagID} isSelected={false} onClick={() => handleSelect(tag.tagID)} />
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
