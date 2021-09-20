import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandComponent } from '../brand/brand.component';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  colors:Color[]=[];
  filterText="";
  route:any="55";
  image="https://localhost:5001/Images/volvo2.jpg";
  
  brands:Brand[]=[];
  dataLoaded:boolean=false;
  constructor( private carService:CarService , private activatedRoute:ActivatedRoute, 
     private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    
     this.route=this.activatedRoute;
    this.activatedRoute.params.subscribe(params=>{
        if(params["brandId"]&&params["colorId"]){
        this.getCarsByBrandIdAndColorId(params["brandId"],params["colorId"]);
      }
     else if(params["brandId"]){
        
         
       
          this.getCarsByBrandID(params["brandId"]);
       

      }
      else if(params["colorId"]){
       
          this.getCarsByColorId(params["colorId"]);
       
      }
      
      else{
         this.getCars();
        
       
      }
      this.getBrands();
      this.getColors();
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      
      this.dataLoaded=true;
    })
  }
   
  
  getCarsByBrandID(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      
      this.dataLoaded=true;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      
      this.dataLoaded=true;
    })
  }
  
  getCarsByBrandIdAndColorId(brandId:number,colorId:number){
    this.carService.getCarsByBrandIdAndColorId(brandId,colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })
  }
}
