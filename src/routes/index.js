import { HeaderOnly } from '~/components/Layout';
import { Following, Home, Upload } from '~/pages/';

const publicRoutes = [
  { path: '/', component: Home, title: 'HOME' },
  { path: '/following', component: Following, title: 'FOLLOWING' },
  { path: '/upload', component: Upload, title: 'UPLOAD', layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
