import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  this.addNewItem()
}  
}


prideti() {
this.kiekis++;
this.addNewItem();
}

@Output() newItemEvent = new EventEmitter<number>();

addNewItem() {
  this.newItemEvent.emit(this.kiekis);
}

}
