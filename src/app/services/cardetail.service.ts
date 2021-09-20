import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModul';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl:string="https://localhost:5001/api";
  constructor(private httpClient: HttpClient) { }

  getCarsById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"/cars/getbyid?id="+carId;
  
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}

 