import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  dabartinisUser: any;
  currUser: any;
  

  login(email: string, password: string) {
    console.log(email, password);  
    this.afAuth.signInWithEmailAndPassword(email, password).then(async() => {
      
      
      console.log('AS PRISIJUGES');
      
      this.router.navigate(['staliukai']);
      alert('Jus prisijunges:  '+ email);
      
  
      var user = await this.afAuth.currentUser;
  this.dabartinisUser= user;
  
    if (this.dabartinisUser) {
      console.log('prisijunges vartotojas yra: ' + this.dabartinisUser.email)
      
      
      
    } else {
      // No user is signed in.
    }
    this.userAtnaujinta.next(true);
    });
  
  }

  async getCurrentUser() {
  
    return this.dabartinisUser;  
  }
  
  userAtnaujinta = new BehaviorSubject<boolean>(false);

  logout() {
    this.afAuth.signOut().then(async() => {
      var user = await this.afAuth.currentUser;
  this.dabartinisUser= user;
  
      this.router.navigate(['/'])});
     
      this.userAtnaujinta.next(true);
  }


}
