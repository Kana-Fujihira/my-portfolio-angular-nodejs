import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProjectCardComponent, ProjectDetailsComponent],
})
export class ProjectModule {}
