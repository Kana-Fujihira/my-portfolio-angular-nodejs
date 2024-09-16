import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project/project-card/project-card.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    NavbarComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
  ],
})
export class ProjectModule {}
