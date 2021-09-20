import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModul';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:any="https://localhost:5001/api/customers/";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath="getall"
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+newPath);
  }

  getCustomerById(customerId:number):Observable<ListResponseModel<Customer>>{
    let newPath="getbyid?id="+customerId

    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl+newPath);
  }
}
