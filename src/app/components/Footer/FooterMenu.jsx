import MenuItem from './MenuItem';
import MenuTitle from './MenuTitle';

const FooterMenu = (props) => {
  const { menuItems, title } = props;
  return (
    <>
      <MenuTitle title={title} />

      {menuItems?.length > 0 &&
        menuItems.map((item, index) => (
          <MenuItem key={`MenuItem-${index}`} label={item.title} url={item.url} />
        ))}
    </>
  );
};

export default FooterMenu;
