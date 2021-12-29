import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor(private http : ApiService) { }

  ngOnInit(): void {
  }

}
