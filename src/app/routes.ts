import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ProjectComponent,
    title: 'Project',
  },
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
    title: 'Project details',
  },
];
export default routeConfig;
