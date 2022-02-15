import { Component } from '@angular/core';
import { AuthService } from './servisai/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alkanas-vilkas';

email: any;

  constructor(private auth: AuthService){
   this.email = this.auth.currUser;
   console.log('sitas emeilas ' +this.email );
  }
  
}
