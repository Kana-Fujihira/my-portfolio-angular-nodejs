import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, NavbarComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio-angular-nodejs';
}
