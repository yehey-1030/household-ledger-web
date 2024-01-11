import { theme } from '@/styles';
import IconButton from '../IconButton';

interface IHeaderIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  color?: string;
}

function HeaderIconButton({ iconName, color = theme.color.MAJOR_GREEN[100], onClick }: IHeaderIconButtonProps) {
  return <IconButton iconName={iconName} color={color} size="3rem" onClick={onClick} />;
}
export default HeaderIconButton;
