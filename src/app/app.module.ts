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
import { MemoPageComponent } from './components/memo-page/memo-page.component';
import { RemPageComponent } from './components/rem-page/rem-page.component';
import { AsidebarComponent } from './components/asidebar/asidebar.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MmemoriPageComponent } from './components/mmemori-page/mmemori-page.component';
import { LettersPageComponent } from './components/letters-page/letters-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { TreePageComponent } from './components/tree-page/tree-page.component';
import { HomenPageComponent } from './components/homen-page/homen-page.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { DirectorioPageComponent } from './components/directorio-page/directorio-page.component';
import { CatalogoPageComponent } from './components/catalogo-page/catalogo-page.component';
import { ConmemoracionPageComponent } from './components/conmemoracion-page/conmemoracion-page.component';
import { FooterComponent } from './components/footer/footer.component';

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
    AboutPageComponent,
    MemoPageComponent,
    RemPageComponent,
    AsidebarComponent,
    ContactPageComponent,
    MmemoriPageComponent,
    LettersPageComponent,
    TestPageComponent,
    TreePageComponent,
    HomenPageComponent,
    HomenavbarComponent,
    DirectorioPageComponent,
    CatalogoPageComponent,
    ConmemoracionPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
