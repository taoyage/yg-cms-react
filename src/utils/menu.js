const menu = [
  {
    id: '1',
    name: 'yg-cms',
    icon: 'dashboard',
    route: '/about'
  },
  {
    id: '2',
    name: '用户管理',
    icon: 'user',
    route: '/user'
  },
  {
    id: '21',
    name: '用户详情',
    menuParentId: '-1',
    route: '/user/:id'
  }
];

export default menu;
