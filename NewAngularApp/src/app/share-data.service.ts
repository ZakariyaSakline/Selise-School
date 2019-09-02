import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Weather } from 'src/assets/userModel';



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(
    private http: HttpClient
    ) { }
// api http get call
    apiUrl='https://jsonplaceholder.typicode.com/users';
    getConfig(){
      return this.http.get<User[]>(this.apiUrl);
    }

    // api http weather get call
  
weatherApi='https://jsonplaceholder.typicode.com/users';
getWeatherApi(){
  return this.http.get<Weather[]>(this.weatherApi);
}


  getLocalEmployee():any{
    let localParseArray = JSON.parse(localStorage.getItem('employees'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }


   getLocalcompany():any{
    let localParseArray = JSON.parse(localStorage.getItem('company'));
      if (localParseArray) {
        return localParseArray;
      } else {
        return [];
        }
   }






}
