import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SignupComponent } from './signup/signup.component';
import { SingleblogComponent } from './singleblog/singleblog.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'menu',component:MenuComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'blog',component:BlogComponent},
  {path:'singleblog',component:SingleblogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
