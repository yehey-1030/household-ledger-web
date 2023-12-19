import styled from 'styled-components';
import { TagType } from '@/types/tag';
import HashTagButton from './HashTagButton';
import HashTag from './HashTag';

interface IHashTagGroupProps {
  tagList: TagType[];
  handleSelect?: (tagID: number) => void;
  typeID?: string;
}

function HashTagGroup({ tagList, handleSelect, typeID = '3' }: IHashTagGroupProps) {
  return (
    <Wrapper>
      {tagList.map((tag) =>
        handleSelect ? (
          <HashTagButton label={tag.name} key={tag.tagID} isSelected={false} onClick={() => handleSelect(tag.tagID)} />
        ) : (
          <HashTag label={tag.name} key={tag.tagID} archiveType={typeID} />
        ),
      )}
    </Wrapper>
  );
}

export default HashTagGroup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
