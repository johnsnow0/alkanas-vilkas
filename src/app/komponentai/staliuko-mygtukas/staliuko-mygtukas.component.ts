import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-staliuko-mygtukas',
  templateUrl: './staliuko-mygtukas.component.html',
  styleUrls: ['./staliuko-mygtukas.component.css']
})


export class StaliukoMygtukasComponent implements OnInit {


  @Input()
  text!: string;
  id!: number;

  constructor(private http: ApiService) { }

  ngOnInit(): void {
  }
  nustatytiStaliukoID() {
this.http.staliukoNumeris = this.id;
console.log(this.id);
  }
}
