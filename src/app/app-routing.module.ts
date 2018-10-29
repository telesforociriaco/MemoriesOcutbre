import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './components/home-page/home-page.component';
import { LoginPageComponent} from './components/login-page/login-page.component';
import { RegisterPageComponent} from './components/register-page/register-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MemorialPageComponent } from './components/memorial-page/memorial-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AlliesComponent } from './components/allies/allies.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { MemoPageComponent } from './components/memo-page/memo-page.component';
import { RemPageComponent } from './components/rem-page/rem-page.component';
import { TreePageComponent } from './components/tree-page/tree-page.component';
import { TestPageComponent } from './components/test-page/test-page.component';
import { HomenPageComponent } from './components/homen-page/homen-page.component';
import { MmemoriPageComponent } from './components/mmemori-page/mmemori-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LettersPageComponent } from './components/letters-page/letters-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'memorial', component: MemorialPageComponent},
  { path: 'user', component: UserPageComponent},
  { path: 'allies', component: AlliesComponent},
  { path: 'service', component: ServicePageComponent},
  { path: 'memo', component: MemoPageComponent},
  { path: 'rem', component: RemPageComponent},
  { path: 'tree', component: TreePageComponent},
  { path: 'test', component: TestPageComponent},
  { path: 'homen', component: HomenPageComponent},
  { path: 'mmemori', component: MmemoriPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'letters', component: LettersPageComponent},

  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
