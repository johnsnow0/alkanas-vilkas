import { Component, OnInit } from '@angular/core';
import { UzsakymasService } from 'src/app/servisai/uzsakymas.service';




@Component({
  selector: 'app-staliukas',
  templateUrl: './staliukas.component.html',
  styleUrls: ['./staliukas.component.css']
})
export class StaliukasComponent implements OnInit {

  product:any = [];
  grandTotal:number=0;

  constructor(private uzsakymas: UzsakymasService) {
    this.product = this.uzsakymas.gautiPatiekalai;
   }

  ngOnInit(): void {
  //   this.uzsakymas.getProducts().subscribe(res=>{this.product=res;});
  //  this.grandTotal = this.uzsakymas.getTotalPrice()
  }
  removeItem(item:any) {
    this.uzsakymas.removeCartItem();
  }
  emptyCart() {
    this.uzsakymas.removeCart();
  }
}
