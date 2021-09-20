import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModul';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
 
export class ColorService {
   
  apiUrl="https://localhost:5001";

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"/api/colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
 