import { HeaderOnly } from '~/components/Layout';
import { Following, Home, Profile, Upload } from '~/pages/';

const publicRoutes = [
  { path: '/', component: Home, title: 'HOME' },
  { path: '/@:nickname', component: Profile, title: 'PROFILE' },
  { path: '/following', component: Following, title: 'FOLLOWING' },
  { path: '/upload', component: Upload, title: 'UPLOAD', layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
