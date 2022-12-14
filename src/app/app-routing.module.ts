import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from "./projects/projects.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects-component', component: ProjectsComponent},
  {path: 'navbar-component', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
