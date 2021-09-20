import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Customer } from 'src/app/models/customer';
import { ColorService } from 'src/app/services/color.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[] =[];
  dataLoaded:boolean=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

   getCustomers(){
     this.customerService.getCustomers().subscribe(response=>{
       this.customers=response.data;
       
       this.dataLoaded=true;

     })
   }
}
