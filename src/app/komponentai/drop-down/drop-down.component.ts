import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
import { UzsakymasService } from 'src/app/servisai/uzsakymas.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

visiPatiekalai: any;

  constructor(private http : ApiService, private uzsakymas: UzsakymasService) {

    this.http.gautiVisusPatiekalus().subscribe((data)=>{this.visiPatiekalai=data});
   }

  ngOnInit(): void {
  }
  pasirinktasPatiekalas(id: any){
this.uzsakymas.gautiPatiekala(id.value);
console.log(id.value);
  }
}
