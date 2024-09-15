import { Routes } from '@angular/router';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

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
