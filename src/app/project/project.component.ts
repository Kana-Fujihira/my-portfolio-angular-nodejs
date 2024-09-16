import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../project';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: ` <section>
    <app-projectcard
      *ngFor="let project of projectList"
      [project]="project"
    ></app-projectcard>
  </section>`,
  // templateUrl: './projectlist.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  projectList: Project[] = [];
  projectService: ProjectService = inject(ProjectService);

  constructor() {
    this.projectList = this.projectService.getAllProjects();
  }
}
