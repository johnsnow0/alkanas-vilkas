import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaliukaiComponent } from './komponentai/staliukai/staliukai.component';
import { StaliukoMygtukasComponent } from './komponentai/staliuko-mygtukas/staliuko-mygtukas.component';
import { DropDownComponent } from './komponentai/drop-down/drop-down.component';
import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { PridetiPatiekalaComponent } from './komponentai/prideti-patiekala/prideti-patiekala.component';
import { StaliukasComponent } from './komponentai/staliukas/staliukas.component';
import { KiekioMygtukasComponent } from './komponentai/kiekio-mygtukas/kiekio-mygtukas.component';
import { VirtuveComponent } from './komponentai/virtuve/virtuve.component';
import { RegistracijaComponent } from './komponentai/registracija/registracija.component';
import { LoginComponent } from './komponentai/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    StaliukaiComponent,
    StaliukoMygtukasComponent,
    DropDownComponent,
    MeniuComponent,
    PridetiPatiekalaComponent,
    StaliukasComponent,
    KiekioMygtukasComponent,
    VirtuveComponent,
    RegistracijaComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideAuth(() => getAuth())
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
