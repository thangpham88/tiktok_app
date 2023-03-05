import { HeaderOnly } from '~/components/Layout';
import { Following, Home, Profile, Search, Upload } from '~/pages/';
import RoutersConfig from '~/config/routes';

const publicRoutes = [
  { path: RoutersConfig.root, component: Home, title: 'HOME' },
  { path: RoutersConfig.profile, component: Profile, title: 'PROFILE' },
  { path: RoutersConfig.following, component: Following, title: 'FOLLOWING' },
  { path: RoutersConfig.upload, component: Upload, title: 'UPLOAD', layout: HeaderOnly },
  { path: RoutersConfig.search, component: Search, title: 'SEARCH' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
