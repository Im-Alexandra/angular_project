import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './navbar/index/index.component';
import { PortalComponent } from './navbar/portal/portal.component';
import { LoginComponent } from './navbar/login/login.component';
import { RegisterComponent } from './navbar/register/register.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { SitterListComponent } from './navbar/index/sitter-list/sitter-list.component';

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'index', component: IndexComponent },
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
    {path: 'find-a-sitter', component: SitterListComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
