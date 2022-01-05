import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiekio-mygtukas',
  templateUrl: './kiekio-mygtukas.component.html',
  styleUrls: ['./kiekio-mygtukas.component.css']
})
export class KiekioMygtukasComponent implements OnInit {

kiekis: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

atimti() {

if(this.kiekis != 1) {
  this.kiekis--;
}  
}


prideti() {
this.kiekis++;
}

}
