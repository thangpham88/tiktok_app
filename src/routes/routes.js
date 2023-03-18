import HeaderOnly from '~/layouts/HeaderOnly';
import { Following, Home, Profile, Search, Upload } from '~/pages';
import config from '~/config';

const publicRoutes = [
  { path: config.routers.root, component: Home, title: 'HOME' },
  { path: config.routers.profile, component: Profile, title: 'PROFILE' },
  { path: config.routers.following, component: Following, title: 'FOLLOWING' },
  { path: config.routers.upload, component: Upload, title: 'UPLOAD', layout: HeaderOnly },
  { path: config.routers.search, component: Search, title: 'SEARCH' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
