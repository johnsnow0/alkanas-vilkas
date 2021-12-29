import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DropDownComponent } from './komponentai/drop-down/drop-down.component';
import { StaliukaiComponent } from './komponentai/staliukai/staliukai.component';
import { StaliukoMygtukasComponent } from './komponentai/staliuko-mygtukas/staliuko-mygtukas.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  { path: 'staliukai', component: StaliukaiComponent },
  { path: 'staliuko-mygtukas', component: StaliukoMygtukasComponent },
  { path: 'drop-down', component: DropDownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
