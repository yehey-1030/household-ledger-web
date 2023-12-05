import styled from 'styled-components';
import Icon from './Icon';

interface IIconButtonProps {
  iconName: string;
  size?: string;
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function IconButton({ iconName, size, color, onClick }: IIconButtonProps) {
  return (
    <Wrapper onClick={onClick}>
      <Icon iconName={iconName} size={size} color={color} />
    </Wrapper>
  );
}

export default IconButton;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
`;
