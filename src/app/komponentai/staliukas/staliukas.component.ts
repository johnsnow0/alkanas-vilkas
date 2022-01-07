import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-staliukas',
  templateUrl: './staliukas.component.html',
  styleUrls: ['./staliukas.component.css']
})
export class StaliukasComponent implements OnInit {

  product:any = [];
  grandTotal:number=0;

  constructor(private http: ApiService) {
    this.http.patiekalasGautasEvent.subscribe(res=> {this.product.push(res); console.log(this.product)});
    
   }

  ngOnInit(): void {
     
  //  this.grandTotal = this.uzsakymas.getTotalPrice()
  }
  removeItem(item:any) {
   
  }
  emptyCart() {
    
  }
}
