import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  gautiVisusPatiekalus() {

    return this.http.get('https://restoranas-api.herokuapp.com/patiekalusarasas');
  }
  async gautiPatiekala(id: any) {


    var rezultatas = await this.http.get('https://restoranas-api.herokuapp.com/' + id.value);
    return rezultatas;
  }

  pridetiPatiekala(patiekalas: any) {

    console.log(patiekalas);

    return this.http.post('https://restoranas-api.herokuapp.com', patiekalas).subscribe(data => console.log(data));
  }






}
