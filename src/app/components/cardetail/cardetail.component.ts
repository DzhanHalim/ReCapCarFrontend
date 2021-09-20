import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  cars:Car[]=[];
 
  route:any="55";
  image="https://localhost:5001/Images/volvo2.jpg";
  
  brands:Brand[]=[];
  dataLoaded:boolean=false;
  constructor(private carDetailService:CardetailService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.route=this.activatedRoute;
    this.activatedRoute.params.subscribe(params=>{
      
      
        
         
       
          this.getCarsById(params["carId"]);
       
 
       
    })
  }
  getCarsById(carId:number){
    this.carDetailService.getCarsById(carId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }


}
