import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servisai/auth.service';

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})
export class MeniuComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
this.auth.logout();
  }
}
