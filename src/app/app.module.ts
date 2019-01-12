import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RegisterSitterComponent } from './register/register-sitter/register-sitter.component';
import { RegisterOwnerComponent } from './register/register-owner/register-owner.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SitterListComponent } from './index/sitter-list/sitter-list.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './index/pet-list/pet-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PetComponent } from './index/pet-list/pet/pet.component';
import { SitterComponent } from './index/sitter-list/sitter/sitter.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetFilterPipe } from './pipes/petFilter.pipe';
// import { NgRedux, NgReduxModule } from '@angular-redux/store';
// import { IAppState } from './store';
// import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
// import { rootReducer } from './store'; // Added this to get the root reducer
import { rootReducer, IAppState } from './store/index';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';





@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    RegisterSitterComponent,
    RegisterOwnerComponent,
    SitterListComponent,
    PetListComponent,
    PetComponent,
    SitterComponent,
    MyPetsComponent,
    AddPetComponent,
    PetFilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatStepperModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HttpClientModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgReduxModule,   
    // NgReduxRouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [ ],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
