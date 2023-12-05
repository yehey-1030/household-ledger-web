import { theme } from '@/styles';
import styled from 'styled-components';

interface IIconProps {
  iconName: string;
  size?: string;
  color?: string;
}

function Icon({ iconName, size, color }: IIconProps) {
  return (
    <Wrapper>
      <Span className="material-symbols-outlined" size={size} color={color}>
        {iconName}
      </Span>
    </Wrapper>
  );
}

export default Icon;

const Wrapper = styled.div`
  display: flex;
`;

type SpanType = Pick<IIconProps, 'size' | 'color'>;

const Span = styled.span<SpanType>`
  font-size: ${(props) => props.size ?? '2rem'};
  color: ${(props) => props.color ?? theme.color.MAJOR_GREEN[100]};
`;
