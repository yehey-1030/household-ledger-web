import { useState } from 'react';
import MenuDrawer from '../portal/MenuDrawer';
import { theme } from '@/styles';
import HeaderIconButton from './HeaderIconButton';

function DrawerIconButton({ color = theme.color.MAJOR_GREEN[100] }: { color?: string }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <HeaderIconButton iconName="bar_chart" onClick={() => setIsDrawerOpen(!isDrawerOpen)} color={color} />
      {isDrawerOpen && <MenuDrawer onClose={() => setIsDrawerOpen(false)} />}
    </>
  );
}

export default DrawerIconButton;
