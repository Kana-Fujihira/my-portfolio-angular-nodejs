import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProjectlistComponent, ProjectDetailsComponent],
})
export class ProjectModule {}
