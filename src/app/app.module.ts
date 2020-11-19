import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlogComponent } from './blog/blog.component';
import { SingleblogComponent } from './singleblog/singleblog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { MycartheaderComponent } from './mycartheader/mycartheader.component';
import {UsercheckGuard} from '../app/usercheck.guard';
import {HttpClientModule} from '@angular/common/http';
import{MyserviceService} from './myservice.service';

import{SocialLoginModule,SocialAuthServiceConfig} from 'angularx-social-login' 
import{GoogleLoginProvider} from 'angularx-social-login' 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuListComponent,
    AboutusComponent,
    ContactComponent,
    ReservationComponent,
    GallaryComponent,
    BlogComponent,
    SingleblogComponent,
    LoginComponent,
    SignupComponent,
    AddtocartComponent,
    MycartheaderComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsercheckGuard,MyserviceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '733636692687-m6bhdumr77osmltvpv8pd5df0d89p33s.apps.googleusercontent.com'
            )
          },
         
        ]
      } as SocialAuthServiceConfig
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
