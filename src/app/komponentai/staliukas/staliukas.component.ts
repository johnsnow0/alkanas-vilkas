import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-staliukas',
  templateUrl: './staliukas.component.html',
  styleUrls: ['./staliukas.component.css']
})
export class StaliukasComponent implements OnInit {

  patiekalas:any[] = [];
  grandTotal:number=0;
  kiekis: any;
  staliukoID: any;

  constructor(private http: ApiService) {
    this.http.patiekalasGautasEvent.subscribe(res=> {this.patiekalas.push(res); console.log(this.patiekalas)});
    
    this.patiekalas = this.http.dabartinisStaliukas;
    
    switch (this.http.staliukoNumeris) {
      case 0:
        this.staliukoID = "pirmą";
        break;
      case 1:
        this.staliukoID = "antrą";
        break;
      case 2:
        this.staliukoID = "trečią";
        break;
      case 3:
        this.staliukoID = "ketvirtą";
        break;
    
      default:
        break;
    }
    
   }

  ngOnInit(): void {
    
  }
  salintiPatiekala(item:any) {
    const index = this.patiekalas.indexOf(item, 0);
    if (index > -1) {
       this.patiekalas.splice(index, 1);
    }
    console.log(index);
    
  }
  pateiktiUzsakyma() {
    this.http.uzsakymas(this.patiekalas);
  }
  uzdarytiStala() {
    this.patiekalas = [];
  }

  addItem(kiekis: any, index: any) {
this.patiekalas[index].kiekis = kiekis;
    this.kiekis = kiekis;
return this.kiekis;
  }
}
