import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { menuList } from '@/assets/constants/menu';
import { theme } from '@/styles';
import Drawer from './Drawer';
import Icon from '../Icon';
import P from '../P';

interface IMenuDrawerProps {
  onClose: () => void;
}

function MenuDrawer({ onClose }: IMenuDrawerProps) {
  const router = useRouter();
  return (
    <Drawer onClose={onClose}>
      {menuList.map((menu) => (
        <MenuItem
          onClick={() => {
            router.push(menu.route);
          }}
        >
          <Icon iconName={menu.icon} />
          <MenuText>{menu.title}</MenuText>
        </MenuItem>
      ))}
    </Drawer>
  );
}
export default MenuDrawer;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  align-items: center;
`;
const MenuText = styled(P).attrs({
  fontSize: theme.font.fontSize[20],
  fontWeight: theme.font.fontWeight.semibold,
  color: theme.color.MAJOR_GREEN[200],
})`
  margin-left: 1rem;
`;
