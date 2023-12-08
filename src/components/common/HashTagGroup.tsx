import { ITag } from '@/interfaces/ITag';
import styled from 'styled-components';
import { HashTag } from '.';

interface IHashTagGroupProps {
  tagList: ITag[];
}

function HashTagGroup({ tagList }: IHashTagGroupProps) {
  return (
    <Wrapper>
      {tagList.map((tag) => (
        <HashTag label={tag.tagName} key={tag.tagID} isSelected={false} />
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
