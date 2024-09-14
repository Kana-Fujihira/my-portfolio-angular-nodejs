import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand active" href="#">Logo</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Accueil</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">À propos de moi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Projets</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">LinkedIn</a></li>
                  <li><a class="dropdown-item" href="#">Email</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  `,
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
