import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { 
    
  }
  

  getweatherdata(city:any,units:any){
    // console.log(data,"!!!!!!!!!!!!!!")
    // this.sa=data
  
    
//  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.sa}&appid=5b4bee0ba241d092159faf007e166080`)

return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=675062d58ee5e7c9d2ff32477b0b4763&units='+units)
  

  }
}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4d8c88979amsh23fd843ecda6e6dp17ac3fjsn90bedd282436',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));