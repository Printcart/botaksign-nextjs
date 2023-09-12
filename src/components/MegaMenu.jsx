export const arrHierarchy = (arr) => {
  const map = {};
  const newData = [];

  arr.forEach((item) => {
    map[item.id] = {
      id: item.id,
      title: item.title,
      url: item.slug,
      children: []
    };
  });

  arr.forEach((item) => {
    if (item.parent !== 0) {
      const parent = map[item.parent];
      parent.children.push(map[item.id]);
    } else {
      newData.push(map[item.id]);
    }
  });

  return newData;
};
