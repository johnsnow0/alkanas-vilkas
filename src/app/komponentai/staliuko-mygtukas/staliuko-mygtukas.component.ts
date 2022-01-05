import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staliuko-mygtukas',
  templateUrl: './staliuko-mygtukas.component.html',
  styleUrls: ['./staliuko-mygtukas.component.css']
})


export class StaliukoMygtukasComponent implements OnInit {


  @Input()
  text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
