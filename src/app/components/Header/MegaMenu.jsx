import { fetcPrimaryMenu } from 'botak/api/homepage';

const MegaMenu = async () => {
  const menuItems = await fetcPrimaryMenu();

  const getChildrenItems = (parent, items) => {
    const parentId = parent.id;
    let childrenItems = [];
    if (!items[parentId] || !parentId) return [];
    items[parentId].forEach((item) => {
      const childrens = getChildrenItems(item.parentId, items);
      if (childrens?.length > 0) {
        childrenItems[parentId] = childrens;
      }
    });

    return childrenItems;
  };

  const formatMenu = (menus) => {
    if (!menus?.length) return [];

    const newMenus = [];

    const topLevelElements = [];
    let childrenElements = [];
    menus.forEach((menu) => {
      if (!menu.parent) {
        topLevelElements.push(menu);
      } else {
        childrenElements[menu.parent] = childrenElements[menu.parent]
          ? childrenElements[menu.parent]
          : [];
        childrenElements[menu.parent].push(menu);
      }
    });
    topLevelElements.forEach((e) => {
      const childrens = getChildrenItems(e.id, childrenElements);
      if (childrens?.length > 0) {
      }
      newMenus.push(childrens);
    });

    return newMenus;
  };

  const items = formatMenu(menuItems);
  return <></>;
};

export default MegaMenu;
