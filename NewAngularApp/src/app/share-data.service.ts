import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(
    // private http: HttpClient
    ) { }

    // configUrl='assets/config.json';
    // getConfig(){
    //   return this.http.get(this.configUrl);
    // }


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
