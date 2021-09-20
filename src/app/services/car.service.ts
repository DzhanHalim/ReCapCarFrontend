import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModul';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string="https://localhost:5001/api";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/cars/getbybrandid?id="+brandId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"/cars/getbycolorid?id="+colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/cars/getbycoloridandbrandid?brandId="+brandId+"&colorId="+colorId;

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
