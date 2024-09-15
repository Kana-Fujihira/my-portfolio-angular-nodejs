import { Routes } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ProjectlistComponent,
    title: 'Project List',
  },
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
    title: 'Project details',
  },
];
export default routeConfig;
