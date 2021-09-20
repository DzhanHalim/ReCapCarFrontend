import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CardetailService } from 'src/app/services/cardetail.service';
import { Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';
@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  cars:Car[]=[];
  rentalsByCarId:Rental[]=[];
  customers:Customer[]=[];
  rentalAddForm: FormGroup;
   
  image="https://localhost:5001/Images/volvo2.jpg";
   
  brands:Brand[]=[];
  dataLoaded:boolean=true;
  constructor(private carDetailService:CardetailService , private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,private customerService:CustomerService,
    private router:Router,private localStorageService:LocalStorageService,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    
    this.getCustomerById();
  
    this.activatedRoute.params.subscribe(params=>{
      
      
        
         
       
          this.getCarsById(params["carId"]);
           this.getRentalsByCarId(params["carId"])
       
    })
  
    this.createRentalAddForm();
  }

  getCustomerById(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data;
   
     
    })
  }

  getRentalsByCarId(carId:number){

    this.rentalService.getRentalsByCarId(carId).subscribe(response=>{
      this.rentalsByCarId=response.data;
       
    })
  }
  getCarsById(carId:number){
    this.carDetailService.getCarsById(carId).subscribe(response=>{
      
       this.cars=response.data;
   
    })
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      rentDate : ["",Validators.required],
      returnDate : ["",Validators.required],
    })
  }

  addRental(){
    if(this.rentalAddForm.valid){
     
      // create an object
      let rentalModel = Object.assign({carId:this.cars[0].id, customerId:this.customers[2].id},this.rentalAddForm.value)
       let map = new Map(Object.entries(rentalModel));
       
      // add the object in localstorage
       
      this.localStorageService.addRental(rentalModel)
      Object.keys(rentalModel).forEach(element => {
        
      });
      console.log(Object.entries(rentalModel)[0]);

      //this.router.navigate(['/payment/car/'+this.cars[0].id])
    }
  }
}
