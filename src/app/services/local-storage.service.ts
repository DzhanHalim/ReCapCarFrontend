import { Injectable } from '@angular/core';
import { Rental } from '../models/rental';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addRental(rentalModel:Rental){
    localStorage.setItem("rentalModel",JSON.stringify(rentalModel));
  }

  getRental(){
    return  localStorage.getItem("rentalModel") ;
  }
}

 
