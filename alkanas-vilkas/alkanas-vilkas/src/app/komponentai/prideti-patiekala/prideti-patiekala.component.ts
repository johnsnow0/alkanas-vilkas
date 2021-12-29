import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prideti-patiekala',
  templateUrl: './prideti-patiekala.component.html',
  styleUrls: ['./prideti-patiekala.component.css']
})
export class PridetiPatiekalaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  patiekaloForma = new FormGroup({
    ID: new FormControl(''),
    pavadinimas: new FormControl(''),
    kaina: new FormControl('')
    });
    
    idetiSuniuka() {
    
      // this.suniukoServisas.siustiSuniuka(this.suniukoForma.value);
      
      console.log(this.patiekaloForma.value);
      this.patiekaloForma.reset();
    
    }
}
