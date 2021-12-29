import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  gautiVisusPatiekalus() {

    return this.http.get('https://rest-api-uzuotys4.herokuapp.com/suniukas');
  }
  gautiPatiekala() {

    return this.http.get('https://rest-api-uzuotys4.herokuapp.com/suniukas');
  }

  pridetiPatiekala(patiekalas: any) {
  
    console.log(patiekalas);
    
    return this.http.post('https://rest-api-uzuotys4.herokuapp.com/prideti', patiekalas).subscribe(data=> console.log(data));
  }






}
