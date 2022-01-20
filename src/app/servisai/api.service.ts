import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {



  constructor(private http: HttpClient) { }

  gautiVisusPatiekalus() {

    return this.http.get('https://restoranas-api.herokuapp.com/patiekalusarasas');
  }
  async gautiPatiekala(id: any) {

    var rezultatas = await this.http.get('https://restoranas-api.herokuapp.com/' + id).toPromise();
    this.patiekalasGautasEvent.emit(rezultatas);
  }

  pridetiPatiekala(patiekalas: any) {

    console.log(patiekalas);

    return this.http.post('https://restoranas-api.herokuapp.com', patiekalas).subscribe(data => console.log(data));
  }

patiekalasGautasEvent: EventEmitter<any> = new EventEmitter();

staliukuSarasas() {

  return this.http.get('https://restoranas-api.herokuapp.com/staliukuSarasas');
}

uzsakymas(uzsakymas: any) {
this.staliukas1 = uzsakymas;

}




staliukas1: any[] =[]
staliukas2: any[] =[]
staliukas3: any[] =[]
staliukas4: any[] =[]
dabartinisStaliukas: any[]=[]
staliukoNumeris = 1;



}

