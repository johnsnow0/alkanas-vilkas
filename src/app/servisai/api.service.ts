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

    var rezultatas: any = await this.http.get('https://restoranas-api.herokuapp.com/' + id).toPromise();
    console.log("rezultatas yra ")
    console.log(rezultatas)
    rezultatas.kiekis = 1;
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
console.log(this.staliukoNumeris);
console.log(uzsakymas);
  if(this.staliukoNumeris==0) {
  this.staliukas1 = uzsakymas;
}
else if (this.staliukoNumeris ==1) {
  this.staliukas2 = uzsakymas;
}
else if (this.staliukoNumeris ==2) {
  this.staliukas3 = uzsakymas;
}
else if (this.staliukoNumeris ==3) {
  this.staliukas4 = uzsakymas;
}
}

nustatytiStaliuka(id: any) {
  if(id==0) {
    this.dabartinisStaliukas = this.staliukas1;
  }
  else if(id==1) {
    this.dabartinisStaliukas = this.staliukas2;
  }
  else if(id==2) {
    this.dabartinisStaliukas = this.staliukas3;
  }
  else if(id==3) {
    this.dabartinisStaliukas = this.staliukas4;
  }
  this.staliukoNumeris = id;
  this.rodomasStaliukasEvent.emit(this.dabartinisStaliukas);
  console.log(this.staliukoNumeris);
  console.log(this.dabartinisStaliukas);
}

staliukas1: any[] =[]
staliukas2: any[] =[]
staliukas3: any[] =[]
staliukas4: any[] =[]
dabartinisStaliukas: any[]=[]
staliukoNumeris = 1;

rodomasStaliukasEvent: EventEmitter<any> = new EventEmitter();


}

