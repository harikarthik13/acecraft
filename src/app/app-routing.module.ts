import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { AirenComponent } from './airen/airen.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { SchoolComponent } from './school/school.component';
const routes: Routes = [
  {path:"college",component:CollegeComponent},
  {path:"",component:HomeComponent},
  {path:"notes",component:NotesComponent},
  {path:"airen",component:AirenComponent},
  {path:"enterprises",component:EnterprisesComponent},
  {path:"school",component:SchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
