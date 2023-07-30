import { fetcPrimaryMenu } from "botak/api/homepage";
import NavMenu from "./NavMenu";
import { arrHierarchy } from "./MegaMenu";

const Header = async () => {
  const items = await fetcPrimaryMenu();
  const menuItems = arrHierarchy(items);

  return <NavMenu menuItems={menuItems} />;
};

export default Header;