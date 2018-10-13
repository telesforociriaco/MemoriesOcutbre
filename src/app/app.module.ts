import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomePageComponent } from './components/home-page/home-page.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { AlliesComponent } from './components/allies/allies.component';
import { MemorialPageComponent } from './components/memorial-page/memorial-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    UserPageComponent,
    NotFoundPageComponent,
    ServicePageComponent,
    AlliesComponent,
    MemorialPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
