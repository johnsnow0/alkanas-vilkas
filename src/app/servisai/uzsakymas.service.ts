import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

// var gautiPatiekalai = [];

@Injectable({
  providedIn: 'root'
})

export class UzsakymasService {

  gautiPatiekalai:any=[];

  constructor(private api: ApiService) { }

async gautiPatiekala(id: any) {

 return this.gautiPatiekalai.push(await this.api.gautiPatiekala(id.value));
}

getTotalPrice(){

}

removeCartItem() {

}

removeCart() {

}

  


}
