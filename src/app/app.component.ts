import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { WeatherService } from './service/weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp'
  weather:any
  mintemprature:any
  maxtemprature:any
  humidity:any
  wind:any
  icon:string='';
  city:any=''
  units:any='metric'
  constructor(private serve:WeatherService) {
    
   }
   ngOnInit():void{
    
   }
   
    get(){
      this.serve.getweatherdata(this.city,this.units).subscribe({
        next:(res)=>{
          console.log(res);
          this.weather=res
          console.log(this.weather);
          this.mintemprature=this.weather.main.temp_min
          this.maxtemprature=this.weather.main.temp_max
          this.humidity=this.weather.main.humidity
        this.wind=this.weather.wind.speed
        
        },
        error:(error)=>console.log(error.message),
        complete:()=>console.info("API call completed")
        
            })
          }
           
    }
  

      
   
  
// }
// get(){
//   this.serve.getweatherdata().subscribe((res:any)=>{
//     console.log(res)
//     console.log(this.city);
//   })
// }

