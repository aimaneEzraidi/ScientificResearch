import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfComponent } from './prof/prof.component';
import { DoctorantComponent } from './doctorant/doctorant.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import { AddprofComponent } from './addprof/addprof.component';
import { AddpubComponent } from './addpub/addpub.component';
import { AddphdComponent } from './addphd/addphd.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'dashboard', component: DashboardComponent , children:[
    {path:'publication',component:PublicationComponent},
    {path:'prof',component:ProfComponent},
    {path:'doctorant',component:DoctorantComponent},
    {path:'addprof',component:AddprofComponent},
    {path:'addpub',component:AddpubComponent},
    {path:'addphd',component:AddphdComponent},
  ] },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'contact', component:ContactComponent},
  {path:'about',component:AboutComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
