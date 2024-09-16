import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterModule,
    NavbarComponent,
    ProjectComponent,
  ],
  template: `
    <main>
      <app-navbar></app-navbar>
      <a [routerLink]="['/']"> </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio-angular-nodejs';
}
