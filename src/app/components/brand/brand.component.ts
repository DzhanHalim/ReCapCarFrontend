import { Component, Injectable, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  
  dataLoaded:boolean=false;
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
     
    this.getBrands();
  }

  selectedBrand(brand:Brand){
this.currentBrand=brand;
 
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";

    }
  }
  getBrands(){
    this.brandService.getBrands().subscribe(result=>{
      this.brands=result.data;
      this.dataLoaded=true;
    })
  }
}
