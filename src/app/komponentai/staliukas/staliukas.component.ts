import { analyzeAndValidateNgModules } from '@angular/compiler';
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

  constructor(private http: ApiService) {
    this.http.patiekalasGautasEvent.subscribe(res=> {this.patiekalas.push(res); console.log(this.patiekalas)});
    
   }

  ngOnInit(): void {
     
  //  this.grandTotal = this.uzsakymas.getTotalPrice()
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

  addItem(kiekis: any) {
this.kiekis = kiekis;
return this.kiekis;
  }
}
