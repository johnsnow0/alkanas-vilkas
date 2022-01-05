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
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
