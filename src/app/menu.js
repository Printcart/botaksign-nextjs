import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function Example() {
  return (
    <Menu menuButton={<MenuButton>Menu</MenuButton>}>
      <MenuItem>New File</MenuItem>
      <SubMenu label="Edit">
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
        <SubMenu label="Find">
          <MenuItem>Find...</MenuItem>
          <MenuItem>Find Next</MenuItem>
          <MenuItem>Find Previous</MenuItem>
        </SubMenu>
      </SubMenu>
      <MenuItem>Print...</MenuItem>
    </Menu>
  );
}
