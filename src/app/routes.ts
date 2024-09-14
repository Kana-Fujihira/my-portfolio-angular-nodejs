import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
const routeConfig: Routes = [
  {
    path: '',
    component: NavbarComponent,
    title: 'Home page',
  },
];
export default routeConfig;
