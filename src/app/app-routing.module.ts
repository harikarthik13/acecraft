import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { SchoolComponent } from './school/school.component';
import { EnterprisesComponent } from './enterprises/enterprises.component';
import { AirenMaskComponent } from './airen-mask/airen-mask.component';
import { NotesComponent } from './notes/notes.component';
import { CollegeComponent } from './college/college.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: AcecraftComponent,
  },
  { path: 'school', component: SchoolComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'enterprises', component: EnterprisesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'airen', component: AirenMaskComponent },
  {path:'college',component:CollegeComponent},
  {path:'sign_in',component:SignInComponent},
  {path:"viewProduct/:id",component:ViewProductComponent},
  {path:"cart_details",component:CartdetailsComponent,canActivate:[AuthGuard] },
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
