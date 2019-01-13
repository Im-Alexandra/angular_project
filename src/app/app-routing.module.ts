import { AddPetComponent } from './add-pet/add-pet.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { SitterListComponent } from './index/sitter-list/sitter-list.component';
import { PetComponent } from './index/pet-list/pet/pet.component';
import { SitterComponent } from './index/sitter-list/sitter/sitter.component';
import { PetListComponent } from './index/pet-list/pet-list.component';

const routes: Routes = [
  {path:'', redirectTo:'index/pet-list', pathMatch:'full'},
  {path:'index', component: IndexComponent, children: [
    {path : 'sitter-list', component: SitterListComponent},
    {path: 'sitter/:id', component: SitterComponent, 
    // canActivate: [AuthGuard]
  },
    {path : 'pet-list', component: PetListComponent},
    {path : 'pet/:id', component: PetComponent, 
    // canActivate: [AuthGuard]
  }
    
  ]},
  // {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children: [
  //   {path: 'find-a-sitter', component: SitterListComponent}
  // ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'my-pets', component: MyPetsComponent, canActivate: [AuthGuard]},
  {path: 'add-pet', component: AddPetComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
