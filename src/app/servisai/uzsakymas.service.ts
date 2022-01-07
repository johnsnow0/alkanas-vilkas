import { Injectable } from '@angular/core';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})

export class UzsakymasService {

  // gautiPatiekalai:any=[];

  constructor(private api: ApiService) { }

// async gautiPatiekala(id: any) {

//   console.log(await this.api.gautiPatiekala(id));
// //  return this.gautiPatiekalai.push(await this.api.gautiPatiekala(id.value));


}
