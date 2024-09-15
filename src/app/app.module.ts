import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    NavbarComponent,
    ProjectlistComponent,
    ProjectDetailsComponent,
  ],
})
export class ProjectModule {}
