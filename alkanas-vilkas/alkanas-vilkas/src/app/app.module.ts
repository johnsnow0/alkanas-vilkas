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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaliukaiComponent } from './komponentai/staliukai/staliukai.component';
import { StaliukoMygtukasComponent } from './komponentai/staliuko-mygtukas/staliuko-mygtukas.component';
import { DropDownComponent } from './komponentai/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    StaliukaiComponent,
    StaliukoMygtukasComponent,
    DropDownComponent
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
    MatSelectModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
