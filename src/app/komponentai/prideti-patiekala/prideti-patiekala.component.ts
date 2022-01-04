import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-prideti-patiekala',
  templateUrl: './prideti-patiekala.component.html',
  styleUrls: ['./prideti-patiekala.component.css']
})
export class PridetiPatiekalaComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {
  }
  patiekaloForma = new FormGroup({
    
    pavadinimas: new FormControl(''),
    kaina: new FormControl('')
    });
    
    naujasPatiekalas() {
    
       this.api.pridetiPatiekala(this.patiekaloForma.value);
      
      console.log(this.patiekaloForma.value);
      this.patiekaloForma.reset();
    
    }
}
