import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DropDownComponent } from './komponentai/drop-down/drop-down.component';
import { KiekioMygtukasComponent } from './komponentai/kiekio-mygtukas/kiekio-mygtukas.component';
import { MeniuComponent } from './komponentai/meniu/meniu.component';
import { PridetiPatiekalaComponent } from './komponentai/prideti-patiekala/prideti-patiekala.component';
import { StaliukaiComponent } from './komponentai/staliukai/staliukai.component';
import { StaliukasComponent } from './komponentai/staliukas/staliukas.component';
import { StaliukoMygtukasComponent } from './komponentai/staliuko-mygtukas/staliuko-mygtukas.component';

const routes: Routes = [
  {path: '', redirectTo: 'staliukai', pathMatch: 'full'},
  { path: 'staliukai', component: StaliukaiComponent },
  { path: 'staliuko-mygtukas', component: StaliukoMygtukasComponent },
  { path: 'drop-down', component: DropDownComponent },
  { path: 'meniu', component: MeniuComponent },
  { path: 'prideti-patiekala', component: PridetiPatiekalaComponent },
  { path: 'staliukas', component: StaliukasComponent },
  { path: 'kiekio-mygtukas', component: KiekioMygtukasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
