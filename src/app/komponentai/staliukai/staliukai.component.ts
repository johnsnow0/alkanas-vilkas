import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-staliukai',
  templateUrl: './staliukai.component.html',
  styleUrls: ['./staliukai.component.css']
})
export class StaliukaiComponent implements OnInit {

staliukai: any

  constructor(private http: ApiService) { 
    this.http.staliukuSarasas().subscribe((data) => { this.staliukai = data });
  }

  ngOnInit(): void {
  }

}
