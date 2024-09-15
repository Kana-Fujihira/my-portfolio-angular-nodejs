import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
@Component({
  selector: 'app-projectlist',
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
        <div *ngFor="let project of projects" class="col">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a [routerLink]="['/project-details']" class="btn btn-primary"
                >Go somewhere</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  // templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.scss',
})
export class ProjectlistComponent {
  projects: any = [1, 2, 3, 4];
}
