import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

const routeConfig: Routes = [
  {
    path: '/',
    component: NavbarComponent,
    title: 'Navbar',
  },
  {
    path: '/',
    component: ProjectlistComponent,
    title: 'Project List',
  },
];
export default routeConfig;
