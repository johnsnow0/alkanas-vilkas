import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/servisai/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Login: new FormControl(''),
    Password: new FormControl(''),
  });


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    console.log(loginForm.value)
    let json = JSON.stringify(loginForm.value)
    console.log(json)
    this.auth.login(loginForm.value.Login, loginForm.value.Password);
  }
}

