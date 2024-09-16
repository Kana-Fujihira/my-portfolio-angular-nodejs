import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { Project } from '../../project';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterOutlet,
    CommonModule,
    ProjectDetailsComponent,
  ],
  template: `
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">
                {{ project.description }}
              </p>
              <p class="card-text">
                {{ project.skil }}
              </p>
              <a [routerLink]="['/project-details']" class="btn btn-primary"
                >Détail</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  // templateUrl: './projectlist.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project!: Project;
  constructor() {}
}
