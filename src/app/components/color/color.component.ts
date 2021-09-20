import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] =[];
  colorName:boolean=false;
  dataLoaded:boolean=false;
  currentColor:Color;
  colorActive=true;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
     
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  setCurrentColorClass(color:Color){

    if(color==this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item"; 
    }
  }
   getColors(){
     this.colorService.getColors().subscribe(response=>{
       this.colors=response.data;
       
       this.dataLoaded=true;

     })
   }
}
