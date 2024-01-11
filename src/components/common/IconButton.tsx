import styled from 'styled-components';
import Icon from './Icon';

interface IIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  size?: string;
  color?: string;
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
  align-items: center;
  margin: 0;
  padding: 0;
`;
